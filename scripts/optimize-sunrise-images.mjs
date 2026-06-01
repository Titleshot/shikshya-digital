import fs from "fs";
import path from "path";
import sharp from "sharp";

const SRC = path.join(process.cwd(), "Sunrise College Image");
const DIR = path.join(process.cwd(), "public", "sunrise");

const MAP = {
  "Hero Section - College Building.png": "hero",
  "Academics Section - Management Program.png": "management",
  "Academics Section - Science Program.png": "science",
  "Academics Section - Computer IT program.png": "it",
  "Admission Section.png": "admission",
  "Career Section - Career Success Image.png": "career",
  "Contact Section - Front Desk.png": "contact",
  "Event and Activities - Award Ceremony.png": "gallery-award",
  "Event and Activities - Sports Event.png": "gallery-sports",
  "Event and Activities - Tech Event.png": "gallery-tech",
  "Events and Activities - Cultural Program.png": "gallery-cultural",
  "Facilities Section - Cafeteria.png": "cafeteria",
  "Facilities Section - Computer Lab.png": "computer-lab",
  "Facilities Section - Modern Library.png": "library",
  "Facilities Section - Science Lab.png": "science-lab",
  "Facilities Section - Seminar Hall.png": "seminar",
  "Student Life Photos - Casual Campus Interaction.png": "life-1",
  "Student Life Photos - Student discussing projects.png": "life-2",
  "Student Life Photos - Student using laptop.png": "life-3",
  "Testimonial - Successful student.png": "testimonial-student",
  "Testimonial - Faculty Potrait.png": "testimonial-faculty",
};

const MAX_WIDTH = {
  hero: 2400,
  admission: 2400,
  contact: 2400,
  career: 1920,
};
const DEFAULT_MAX = 1920;
const WEBP_QUALITY = 92;

async function processOne(srcName, base) {
  const input = path.join(SRC, srcName);
  if (!fs.existsSync(input)) {
    console.warn(`Skip (missing): ${srcName}`);
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
  console.log(`✓ ${base}.webp → ${(after.size / 1024).toFixed(0)}KB`);
}

if (!fs.existsSync(DIR)) fs.mkdirSync(DIR, { recursive: true });

console.log("Re-optimizing from originals (quality 92)...\n");
for (const [srcName, base] of Object.entries(MAP)) {
  await processOne(srcName, base);
}
console.log("\nDone.");
