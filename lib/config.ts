// ============================================================================
// SITE CONFIGURATION — edit this file to customise the whole website
// ============================================================================

// Your WhatsApp number with country code, digits only (e.g. "919876543210")
export const WHATSAPP_NUMBER = "917409628883";

export const BRAND = {
  name: "TheAssign",
  accent: "mate",
  fullName: "TheAssignmate",
  tagline: "Learn it. Build it. Own it.",
  status: "Online now • Avg reply: 2 mins",
  email: "hello@theassignmate.com",
  siteUrl: "https://theassignmate.vercel.app",
};

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export type ServiceIcon = "tutor" | "project" | "viva" | "edit" | "code";

export const SERVICES: {
  icon: ServiceIcon;
  title: string;
  desc: string;
  points: string[];
  tag: string;
  message: string;
}[] = [
  {
    icon: "tutor",
    title: "1-on-1 Tutoring & Doubt Solving",
    desc: "Stuck on a concept the night before a deadline? Get a patient tutor who explains it until it clicks.",
    points: ["Live sessions on Google Meet", "BBA, MBA, BCA, B.Tech & more", "Doubts answered on WhatsApp"],
    tag: "Most popular",
    message: "Hi TheAssignmate! I'd like a 1-on-1 tutoring session for my subject.",
  },
  {
    icon: "project",
    title: "Project & Report Mentoring",
    desc: "We guide you through topic selection, research, structure and analysis — you write it, we review it.",
    points: ["Topic & synopsis guidance", "Chapter-by-chapter feedback", "Research methodology help"],
    tag: "Mentorship",
    message: "Hi TheAssignmate! I need mentoring for my project / report.",
  },
  {
    icon: "viva",
    title: "Viva & Presentation Prep",
    desc: "Walk into your viva confident. Mock questions, answer coaching and presentation practice.",
    points: ["Mock viva sessions", "Likely-questions practice", "Slide & delivery feedback"],
    tag: "Confidence boost",
    message: "Hi TheAssignmate! I'd like viva / presentation preparation sessions.",
  },
  {
    icon: "code",
    title: "Coding & AI-ML Bootcamp",
    desc: "Learn to build real projects in Python, ML, React/Next.js or MERN with a mentor pair-programming beside you.",
    points: ["Pair-programming sessions", "Debugging help on your code", "Git, deployment & best practices"],
    tag: "Hands-on",
    message: "Hi TheAssignmate! I want coding / AI-ML mentoring sessions.",
  },
  {
    icon: "edit",
    title: "Proofreading & Formatting",
    desc: "Polish the report you wrote: grammar, clarity, structure, APA/IEEE citations and university formatting.",
    points: ["Grammar & clarity edits", "Citation & reference fixes", "Tracked-changes feedback"],
    tag: "Polish",
    message: "Hi TheAssignmate! I'd like my report proofread and formatted.",
  },
];

export const STEPS = [
  { title: "Message us on WhatsApp", desc: "Tell us your course, subject and what you want to learn or improve." },
  { title: "Get matched with a mentor", desc: "We pair you with a tutor experienced in your exact subject." },
  { title: "Learn in live sessions", desc: "Work through concepts, your project or mock vivas together." },
  { title: "Submit with confidence", desc: "Your work, your understanding — ready for any question asked." },
];

export const PRICING = [
  {
    name: "Single Session",
    price: "₹499",
    unit: "/ hour",
    desc: "Perfect for clearing doubts or one tricky topic.",
    features: ["60-min live session", "Session notes shared", "24h WhatsApp follow-up"],
    highlight: false,
  },
  {
    name: "Project Mentor",
    price: "₹2,999",
    unit: "/ project",
    desc: "Guided support from synopsis to final review.",
    features: ["5 live mentoring sessions", "Feedback on every draft", "Mock viva included", "Unlimited WhatsApp doubts"],
    highlight: true,
  },
  {
    name: "Semester Pass",
    price: "₹7,999",
    unit: "/ semester",
    desc: "Ongoing tutoring across all your subjects.",
    features: ["20 hours of tutoring", "All subjects covered", "Priority scheduling", "Exam-prep sessions"],
    highlight: false,
  },
];

// Only add testimonials from real students who agreed to be quoted.
// The section stays hidden while this list is empty.
export const TESTIMONIALS: { quote: string; name: string; course: string }[] = [
  // { quote: "The mock viva sessions made the real one feel easy.", name: "A. S.", course: "MBA, 2nd year" },
];

export const FAQS = [
  {
    q: "Do you write or submit assignments for students?",
    a: "No. We teach, mentor and give feedback — you do the work and submit it yourself. That way you actually understand it and stay within your university's academic-integrity rules.",
  },
  {
    q: "Which subjects and courses do you cover?",
    a: "Management (BBA/MBA), commerce, finance, computer science (BCA/MCA/B.Tech), data science and AI-ML. Message us if your subject isn't listed — we likely have a tutor for it.",
  },
  {
    q: "How are sessions conducted?",
    a: "Live on Google Meet or Zoom with screen-sharing, plus WhatsApp for quick doubts between sessions.",
  },
  {
    q: "Can I get help at short notice?",
    a: "Yes. Message us and we'll try to schedule a tutor within a few hours, including late evenings.",
  },
  {
    q: "How do payments work?",
    a: "Pay per session via UPI, or choose a package. If your first session doesn't help, we'll refund it.",
  },
];

// Default WhatsApp icebreaker used by the main "Chat" buttons (navbar, hero, floating button, final CTA)
export const ICEBREAKER =
  "Hi TheAssignmate! I'm an Amity Online student and I'd like help understanding my assignment / preparing for my viva.";

export const AMITY_SUBJECTS = [
  "Project Management",
  "Financial Management",
  "Marketing & Brand Management",
  "Human Resource Management",
  "Business Statistics",
  "Research Methodology",
  "Accounting & Taxation",
  "Python & Data Analytics",
];

export const PROOFS: { src: string; caption: string; alt: string }[] = [
  {
    src: "/WhatsApp Image 2026-10-11 at 20.06.03.jpeg",
    caption: "Gokul Ferose (Amity) — 28.7 / 30 Scored in AMIGO Portal",
    alt: "WhatsApp screenshot showing Amity student scoring 28.7 out of 30 marks",
  },
  {
    src: "/WhatsApp Image 2026-10-11 at 20.06.04.jpeg",
    caption: "Ali Bin Tariq (Amity BCA) — Python Programming & AMIGO Delivery",
    alt: "WhatsApp screenshot showing BCA programming project delivery",
  },
  {
    src: "/WhatsApp Image 2026-10-11 at 20.06.01.jpeg",
    caption: "Vikas Kumar (Amity MBA) — Full Project & Viva Prep Completed",
    alt: "WhatsApp screenshot showing MBA project completion and audio confirmation",
  },
  {
    src: "/WhatsApp Image 2026-10-11 at 20.06.02.jpeg",
    caption: "Sonam Sharma (Amity) — Stock Market Project & Viva Accepted",
    alt: "WhatsApp screenshot confirming financial stock market report completion",
  },
  {
    src: "/WhatsApp Image 2026-10-11 at 20.06.03 (1).jpeg",
    caption: "Manav Amity — Urgent Project Started Before Payment & Delivered",
    alt: "WhatsApp screenshot showing urgent project started immediately",
  },
  {
    src: "/WhatsApp Image 2026-10-11 at 20.06.03 (2).jpeg",
    caption: "Tushar Dahima (Amity) — Full NTCC Project & Viva Prep Call",
    alt: "WhatsApp screenshot showing viva coaching call and discussion",
  },
  {
    src: "/WhatsApp Image 2026-10-11 at 20.06.01 (2).jpeg",
    caption: "Sourav Santra (Amity BBA) — All 4 NTCC Portal Tiles Completed",
    alt: "WhatsApp screenshot showing NTCC report submitted and approved",
  },
  {
    src: "/WhatsApp Image 2026-10-11 at 20.06.00.jpeg",
    caption: "R. Amity (B.Tech) — Full Working Code & Project Submission",
    alt: "WhatsApp screenshot confirming B.Tech code handover and review",
  },
  {
    src: "/WhatsApp Image 2026-10-11 at 20.06.02 (1).jpeg",
    caption: "Himanshu Goyal (Amity) — Project Report & Turnitin Plagiarism Check",
    alt: "WhatsApp screenshot discussing project evaluation and Turnitin report",
  },
  {
    src: "/WhatsApp Image 2026-10-11 at 20.06.02 (2).jpeg",
    caption: "Rishi Amity (MBA) — Direct Portal Login Submission",
    alt: "WhatsApp screenshot showing direct Amity portal submission",
  },
  {
    src: "/WhatsApp Image 2026-10-11 at 20.06.01 (1).jpeg",
    caption: "Naman Garg (Amity) — Major Finance & Investment Platform Report",
    alt: "WhatsApp screenshot showing major finance research project report",
  },
  {
    src: "/WhatsApp Image 2026-10-11 at 20.07.31.jpeg",
    caption: "Sahil Tomar (Amity) — Urgent Submission Delivery & Voice Note",
    alt: "WhatsApp screenshot confirming urgent deadline delivery",
  },
];

