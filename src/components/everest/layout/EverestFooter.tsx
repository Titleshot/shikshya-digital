import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { navLinks, schoolInfo } from "@/lib/everest/data";

export function EverestFooter() {
  return (
    <footer className="border-t border-black/5 bg-[var(--everest-navy)] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 sm:px-8">
        <div className="lg:col-span-2">
          <p className="text-lg font-bold">{schoolInfo.name}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/70">
            {schoolInfo.tagline} — हामी विद्यार्थीलाई शैक्षिक उत्कृष्टता, चरित्र
            निर्माण र जीवनका लागि आवश्यक सीपहरू प्रदान गर्छौं।
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--everest-gold)]">
            द्रुत लिङ्क
          </p>
          <ul className="space-y-2 text-sm text-white/75">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--everest-gold)]">
            सम्पर्क
          </p>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              {schoolInfo.location}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              {schoolInfo.phone}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              {schoolInfo.email}
            </li>
          </ul>
          <div className="mt-4 flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="सामाजिक सञ्जाल"
                className="rounded-lg bg-white/10 p-2 transition hover:bg-white/20"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {schoolInfo.name}. सर्वाधिकार सुरक्षित। | Demo by Shikshya Digital
      </div>
    </footer>
  );
}
