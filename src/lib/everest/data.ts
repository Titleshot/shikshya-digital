import { everestImages } from "./images";

export const schoolInfo = {
  name: "Everest International School",
  tagline: "गुणस्तरीय शिक्षा, उज्ज्वल भविष्य",
  location: "ललितपुर, नेपाल",
  established: "२०७०",
  phone: "+977 01-5XXXXXX",
  email: "info@everestschool.edu.np",
  grades: "Nursery – Grade 12",
} as const;

export const quickInfo = [
  { icon: "graduation", label: "कक्षा", value: schoolInfo.grades },
  { icon: "map", label: "स्थान", value: schoolInfo.location },
  { icon: "school", label: "स्थापना", value: `वि.सं. ${schoolInfo.established}` },
  { icon: "phone", label: "सम्पर्क", value: schoolInfo.phone },
] as const;

export const whyChooseUs = [
  {
    title: "अनुभवी शिक्षकहरू",
    description: "वर्षौंको अनुभव भएका योग्य र समर्पित शिक्षकहरू।",
    image: everestImages.teachers,
  },
  {
    title: "सुरक्षित वातावरण",
    description: "विद्यार्थीको सुरक्षा र कल्याणलाई प्राथमिकता।",
    image: everestImages.playgroundSafe,
  },
  {
    title: "आधुनिक शिक्षण प्रणाली",
    description: "Smart class, digital tools र interactive learning।",
    image: everestImages.modernLearning,
  },
  {
    title: "Extra-curricular गतिविधि",
    description: "खेलकुद, कला, संगीत र सांस्कृतिक कार्यक्रम।",
    image: everestImages.activities,
  },
  {
    title: "Digital learning support",
    description: "आधुनिक computer lab र science lab सुविधा।",
    image: everestImages.computerLab,
  },
  {
    title: "व्यक्तिगत मार्गदर्शन",
    description: "प्रत्येक विद्यार्थीलाई ध्यान दिईने सानो कक्षा वातावरण।",
    image: everestImages.about,
  },
] as const;

export const programs = [
  {
    title: "Primary Level",
    level: "कक्षा १–५",
    description: "आधारभूत शिक्षा, चरित्र निर्माण र सिर्जनात्मक सोच विकास।",
    icon: "book",
  },
  {
    title: "Secondary Level",
    level: "कक्षा ६–१०",
    description: "व्यापक पाठ्यक्रम, परीक्षा तयारी र व्यावहारिक सिकाइ।",
    icon: "layers",
  },
  {
    title: "+2 Science / Management",
    level: "कक्षा ११–१२",
    description: "विज्ञान र व्यवस्थापन संकाय — उच्च शिक्षाको मजबुत आधार।",
    icon: "flask",
  },
] as const;

export const admissionSteps = [
  "सोधपुछ फर्म भर्नुहोस्",
  "विद्यालय भ्रमण",
  "प्रवेश परीक्षा",
  "भर्ना पुष्टि",
] as const;

export const facilities = [
  { title: "पुस्तकालय", image: everestImages.library },
  { title: "विज्ञान प्रयोगशाला", image: everestImages.scienceLab },
  { title: "कम्प्युटर प्रयोगशाला", image: everestImages.computerLab },
  { title: "खेल मैदान", image: everestImages.playground },
  { title: "यातायात सुविधा", image: everestImages.hero },
] as const;

export const galleryItems = [
  { title: "वार्षिक दिवस", image: everestImages.galleryAnnual },
  { title: "पुरस्कार समारोह", image: everestImages.galleryAward },
  { title: "खेलकुद दिवस", image: everestImages.gallerySports },
  { title: "कक्षाकोठा सिकाइ", image: everestImages.about },
  { title: "विज्ञान प्रयोग", image: everestImages.scienceExperiment },
  { title: "सांस्कृतिक कार्यक्रम", image: everestImages.activities },
] as const;

export const testimonials = [
  {
    name: "सुनीता श्रेष्ठ",
    role: "अभिभावक",
    quote:
      "यो विद्यालयले मेरो बच्चाको confidence धेरै बढाएको छ। शिक्षकहरू धेरै ध्यान दिन्छन्।",
  },
  {
    name: "आर्यन तामाङ",
    role: "विद्यार्थी, कक्षा ९",
    quote:
      "यहाँको वातावरण सुरक्षित छ र सिकाइ रमाइलो लाग्छ। म science lab मा धेरै सिकेको छु।",
  },
  {
    name: "रमेश अधिकारी",
    role: "शिक्षक",
    quote:
      "हामी विद्यार्थी-केन्द्रित शिक्षण प्रणाली अपनाउँछौं — हरेक बच्चाको सम्भावना बढाउँछौं।",
  },
] as const;

export const newsItems = [
  {
    title: "Admission Open २०८२",
    date: "चैत्र १, २०८१",
    tag: "भर्ना",
    excerpt: "नर्सरी देखि Grade 12 सम्म नयाँ भर्ना खुला छ।",
  },
  {
    title: "वार्षिक परीक्षा तालिका",
    date: "फाल्गुन १५, २०८१",
    tag: "सूचना",
    excerpt: "मार्च अन्त्यसम्म वार्षिक परीक्षा सञ्चालन हुनेछ।",
  },
  {
    title: "वार्षिक दिवस कार्यक्रम",
    date: "माघ २०, २०८१",
    tag: "कार्यक्रम",
    excerpt: "विद्यार्थी, अभिभावक र शिक्षकको सहभागितामा भव्य कार्यक्रम।",
  },
] as const;

export const navLinks = [
  { href: "#about", label: "हाम्रो बारेमा" },
  { href: "#programs", label: "पाठ्यक्रम" },
  { href: "#admission", label: "भर्ना" },
  { href: "#facilities", label: "सुविधा" },
  { href: "#gallery", label: "ग्यालेरी" },
  { href: "#contact", label: "सम्पर्क" },
] as const;
