import Link from "next/link";
import { CONTACT } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:flex-row sm:px-8">
        <div className="text-center sm:text-left">
          <p className="text-lg font-semibold text-ink">Shikshya Digital</p>
          <p className="mt-1 text-sm text-muted">
            विद्यालय र कलेजका लागि प्रिमियम डिजिटल समाधान
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 text-sm text-muted sm:items-end">
          <a href={`mailto:${CONTACT.email}`} className="hover:text-brand-600">
            {CONTACT.email}
          </a>
          <a href={CONTACT.whatsapp} className="hover:text-brand-600">
            WhatsApp सम्पर्क
          </a>
        </div>
        <p className="text-xs text-muted/80">
          © {new Date().getFullYear()} Shikshya Digital. सर्वाधिकार सुरक्षित।
        </p>
      </div>
    </footer>
  );
}
