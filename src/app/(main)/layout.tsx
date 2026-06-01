import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Shikshya Digital | विद्यालय र कलेजका लागि प्रिमियम वेबसाइट",
  description:
    "नेपालका विद्यालय र कलेजका लागि आधुनिक, admission-focused वेबसाइट निर्माण सेवा। नि:शुल्क परामर्श लिनुहोस्।",
  keywords: [
    "school website Nepal",
    "college website",
    "विद्यालय वेबसाइट",
    "Shikshya Digital",
  ],
  openGraph: {
    title: "Shikshya Digital",
    description: "विद्यालय र कलेजका लागि प्रिमियम डिजिटल समाधान",
    type: "website",
  },
};

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
