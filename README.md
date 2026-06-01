# Shikshya Digital — Premium Landing Page

Ultra-premium, high-conversion animated landing page for **Shikshya Digital** — targeting school and college owners in Nepal.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **Framer Motion**
- **Lucide Icons**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout + Nepali fonts
│   ├── page.tsx        # Landing page
│   └── globals.css     # Tailwind + premium styles
├── components/
│   ├── layout/         # Header, Footer
│   ├── sections/       # All 8 landing sections
│   └── ui/             # Button, SectionHeading, etc.
└── lib/
    ├── animations.ts   # Framer Motion variants
    └── constants.ts    # Nav links, contact info
```

## Customize

- Update contact details in `src/lib/constants.ts`
- Connect the contact form in `src/components/sections/FinalCTA.tsx` to your API or email service
