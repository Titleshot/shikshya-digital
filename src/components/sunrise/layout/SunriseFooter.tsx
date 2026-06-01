import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { collegeInfo, programs } from "@/lib/sunrise/data";

export function SunriseFooter() {
  return (
    <footer className="bg-[var(--sunrise-navy)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 sm:px-8">
        <div className="lg:col-span-2">
          <p className="text-xl font-bold">{collegeInfo.name}</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">
            करियर, नेतृत्व र अवसर — हामी विद्यार्थीलाई भविष्यको प्रतिस्पर्धामा
            अगाडि बढ्न तयार पार्छौं।
          </p>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-amber-400">
            कार्यक्रम
          </p>
          <ul className="space-y-2 text-sm text-white/70">
            {programs.map((p) => (
              <li key={p.title}>
                <Link href="#programs" className="hover:text-amber-400">
                  {p.nepali} ({p.title})
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-amber-400">
            सम्पर्क
          </p>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-amber-400" />
              {collegeInfo.location}
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 shrink-0 text-amber-400" />
              {collegeInfo.phone}
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 shrink-0 text-amber-400" />
              {collegeInfo.email}
            </li>
          </ul>
          <div className="mt-4 flex gap-2">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="rounded-lg bg-white/10 p-2 hover:bg-amber-500/20"
                aria-label="social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {collegeInfo.name} | Demo by Shikshya Digital
      </div>
    </footer>
  );
}
