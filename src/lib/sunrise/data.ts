import { sunriseImages } from "./images";

export const collegeInfo = {
  name: "Sunrise College",
  tagline: "करियर, नेतृत्व र अवसर",
  location: "काठमाडौं, नेपाल",
  phone: "+977 01-4XXXXXX",
  email: "admissions@sunrisecollege.edu.np",
  established: "२०६५",
} as const;

export const stats = [
  { value: 15, suffix: "+", label: "वर्षको उत्कृष्टता" },
  { value: 2000, suffix: "+", label: "विद्यार्थी" },
  { value: 100, suffix: "+", label: "शिक्षक र कर्मचारी" },
  { value: 95, suffix: "%", label: "विद्यार्थी सन्तुष्टि" },
] as const;

export const whySunrise = [
  {
    title: "उद्योग-सान्दर्भिक शिक्षा",
    description: "बजारको माग अनुसारको पाठ्यक्रम र व्यावहारिक सिकाइ।",
    icon: "briefcase",
  },
  {
    title: "अनुभवी संकाय",
    description: "विशेषज्ञ शिक्षक र मेन्टरहरूको निरन्तर मार्गदर्शन।",
    icon: "users",
  },
  {
    title: "व्यावहारिक सिकाइ",
    description: "प्रयोगशाला, परियोजना र वास्तविक केस स्टडी।",
    icon: "flask",
  },
  {
    title: "करियर विकास",
    description: "इन्टर्नसिप, कार्यशाला र प्लेसमेन्ट सहयोग।",
    icon: "trending",
  },
  {
    title: "विद्यार्थी क्लब",
    description: "नेतृत्व, सहपाठी सञ्जाल र अतिरिक्त गतिविधि।",
    icon: "users-round",
  },
  {
    title: "आधुनिक सुविधा",
    description: "स्मार्ट कक्षा, प्रयोगशाला र डिजिटल पुस्तकालय।",
    icon: "building",
  },
] as const;

export const programs = [
  {
    title: "Management",
    nepali: "व्यवस्थापन",
    description: "Business, Entrepreneurship, Leadership",
    detail: "व्यवसाय, उद्यमशीलता र नेतृत्वमा दक्षता विकास।",
    image: sunriseImages.management,
    accent: "from-amber-500/20 to-orange-600/10",
  },
  {
    title: "Science",
    nepali: "विज्ञान",
    description: "Research, Innovation, Practical Learning",
    detail: "अनुसन्धान, नवप्रवर्तन र प्रयोगात्मक सिकाइ।",
    image: sunriseImages.science,
    accent: "from-blue-500/20 to-cyan-600/10",
  },
  {
    title: "Information Technology",
    nepali: "सूचना प्रविधि",
    description: "Technology, Software, AI, Future Skills",
    detail: "सफ्टवेयर, AI र भविष्यका प्रविधि सीपहरू।",
    image: sunriseImages.it,
    accent: "from-violet-500/20 to-indigo-600/10",
  },
] as const;

export const studentLife = [
  { title: "क्याम्पस संवाद", image: sunriseImages.life1 },
  { title: "परियोजना प्रस्तुति", image: sunriseImages.life2 },
  { title: "डिजिटल सिकाइ", image: sunriseImages.life3 },
  { title: "प्राविधिक कार्यक्रम", image: sunriseImages.galleryTech },
  { title: "सांस्कृतिक कार्यक्रम", image: sunriseImages.galleryCultural },
  { title: "खेलकुद", image: sunriseImages.gallerySports },
] as const;

export const facilities = [
  { title: "पुस्तकालय", image: sunriseImages.library },
  { title: "कम्प्युटर प्रयोगशाला", image: sunriseImages.computerLab },
  { title: "विज्ञान प्रयोगशाला", image: sunriseImages.scienceLab },
  { title: "सेमिनार हल", image: sunriseImages.seminar },
  { title: "क्याफेटेरिया", image: sunriseImages.cafeteria },
  { title: "खेलकुद", image: sunriseImages.gallerySports },
] as const;

export const careerFeatures = [
  { title: "इन्टर्नसिप सहयोग", description: "उद्योगसँग जोडिएका व्यावहारिक अवसर।" },
  { title: "उद्योग एक्सपोजर", description: "विशेषज्ञहरूसँग प्रत्यक्ष अन्तरक्रिया।" },
  { title: "कार्यशाला", description: "सीप आधारित नियमित तालिम।" },
  { title: "करियर मार्गदर्शन", description: "व्यक्तिगत करियर परामर्श।" },
  { title: "व्यावसायिक विकास", description: "रिज्युमे, अन्तर्वार्ता र सफ्ट सीप।" },
] as const;

export const testimonials = [
  {
    name: "प्रिया गुरुङ",
    role: "BBS Graduate, २०८०",
    quote:
      "Sunrise College ले मलाई व्यवसायिक सोच र आत्मविश्वास दियो। आज म आफ्नै स्टार्टअप चलाउँछु।",
    image: sunriseImages.testimonialStudent,
  },
  {
    name: "डा. सुरेश काफ्ले",
    role: "व्यवस्थापन संकाय",
    quote:
      "हामी विद्यार्थीलाई केवल परीक्षा होइन — वास्तविक संसारका लागि तयार पार्छौं।",
    image: sunriseImages.testimonialFaculty,
  },
  {
    name: "अनिल श्रेष्ठ",
    role: "BSc CSIT, कक्षा १२",
    quote:
      "IT कार्यक्रम र प्रयोगशाला सुविधाले मेरो करियरको दिशा स्पष्ट बनायो।",
    image: sunriseImages.life3,
  },
] as const;

export const galleryItems = [
  { title: "पुरस्कार समारोह", image: sunriseImages.galleryAward },
  { title: "प्राविधिक कार्यक्रम", image: sunriseImages.galleryTech },
  { title: "सांस्कृतिक कार्यक्रम", image: sunriseImages.galleryCultural },
  { title: "खेलकुद", image: sunriseImages.gallerySports },
  { title: "क्याम्पस", image: sunriseImages.hero },
  { title: "करियर सफलता", image: sunriseImages.career },
] as const;

export const admissionSteps = [
  "सोधपुछ पेश गर्नुहोस्",
  "करियर परामर्श",
  "आवेदन पेश",
  "भर्ना पुष्टि",
] as const;

export const navLinks = [
  { href: "#programs", label: "कार्यक्रम" },
  { href: "#why", label: "किन Sunrise?" },
  { href: "#life", label: "कलेज जीवन" },
  { href: "#career", label: "करियर" },
  { href: "#admission", label: "भर्ना" },
  { href: "#contact", label: "सम्पर्क" },
] as const;
