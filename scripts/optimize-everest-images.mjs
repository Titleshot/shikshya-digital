import fs from "fs";
import path from "path";
import sharp from "sharp";

const SRC = path.join(process.cwd(), "Everest School Image");
const DIR = path.join(process.cwd(), "public", "everest");

const MAP = {
  "Hero Section Image.png": "hero",
  "About Section Image - Students in Classroom learning.png": "about",
  "Why Teach Us - Teacher Quality.png": "teachers",
  "Why Teach Us - Safe Environment - School Playground.png": "playground-safe",
  "Activities - Sports,Art,Music class.png": "activities",
  "Modern Learning - Computer Lab.png": "modern-learning",
  "Admission Section - Parent talking with School.png": "admission",
  "Facility Section - Library.png": "library",
  "Facility Section - Science Lab.png": "science-lab",
  "Facility Section - Computer Lab.png": "computer-lab",
  "Facility Section - Playground.png": "playground",
  "Science Lab Experiment.png": "science-experiment",
  "Gallery Section  School Annual Day Celebration.png": "gallery-annual",
  "Gallery Section - Award Ceremony.png": "gallery-award",
  "Gallery Section - Sports Day running race.png": "gallery-sports",
  "Testimonial Section - Smiling Student.png": "testimonial",
  "Contact Section - Student Inquiry.png": "contact",
};

const MAX_WIDTH = {
  hero: 2400,
  admission: 2400,
  contact: 2400,
  library: 1920,
  "science-lab": 1920,
  "computer-lab": 1920,
  testimonial: 1200,
};
const DEFAULT_MAX = 1920;
const WEBP_QUALITY = 92;

async function processOne(srcName, base) {
  const input = path.join(SRC, srcName);
  if (!fs.existsSync(input)) {
    console.warn(`Skip: ${srcName}`);
    return;
  }
  const output = path.join(DIR, `${base}.webp`);
  const maxWidth = MAX_WIDTH[base] ?? DEFAULT_MAX;
  const meta = await sharp(input).metadata();
  let pipeline = sharp(input);
  if (meta.width && meta.width > maxWidth) {
    pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true, fit: "inside" });
  }
  await pipeline
    .webp({ quality: WEBP_QUALITY, effort: 6, smartSubsample: true })
    .toFile(output);
  const after = fs.statSync(output);
  console.log(`✓ ${base}.webp → ${(after.size / 1024).toFixed(0)}KB (${meta.width}x${meta.height})`);
}

if (!fs.existsSync(DIR)) fs.mkdirSync(DIR, { recursive: true });

console.log("Re-optimizing Everest from originals (quality 92)...\n");
for (const [srcName, base] of Object.entries(MAP)) {
  await processOne(srcName, base);
}
console.log("\nDone.");
