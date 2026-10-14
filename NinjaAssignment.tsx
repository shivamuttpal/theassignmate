import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  ShieldCheck,
  Zap,
  CheckCircle2,
  FileText,
  Code2,
  BookOpen,
  AlertCircle,
  ZoomIn,
  X,
  CheckCheck,
  Paperclip, 
  Download,
  Award,
  Lock,
  Sparkles,
  ArrowRight,
  Clock,
  GraduationCap,
  Terminal,
  BarChart3,
  FileCheck2,
  PhoneCall,
  ChevronRight,
  ExternalLink,
  Play
} from 'lucide-react';

// ============================================================================
// 1. OWNER CONFIGURATION (CHANGE YOUR WHATSAPP NUMBER & SCREENSHOTS HERE)
// ============================================================================

// Replace "91XXXXXXXXXX" with your 10-digit mobile number prefixed with 91 (no + or spaces)
const WHATSAPP_NUMBER = "917409628883";

// Brand Name & Status Configuration
const BRAND_CONFIG = {
  name: "TheAssign",
  accentName: "mate",
  fullName: "TheAssignmate",
  statusText: "Online Now • Avg Reply: 2 Mins",
  trustedColleges: [
    "Amity University (Noida / Online / All Campuses)",
    "AMIGO & Amizone Portal",
    "VIT Vellore & Chennai",
    "SRM KTR",
    "Manipal (MAHE)",
    "Delhi University",
    "NMIMS Mumbai"
  ]
};

// All 10 Real Amity Student Proofs + Additional College Proofs
// Each item links to your uploaded screenshot filename AND includes a pixel-accurate
// iOS WhatsApp Dark/Light Mode + Laptop Portal replica so it always renders with zero broken images!
const CHAT_PROOFS = [
  {
    id: "amity-gokul",
    imageUrl: "/WhatsApp Image 2026-10-11 at 20.06.03.jpeg",
    theme: "dark",
    clockTime: "8:02",
    contactName: "Gokul Ferose Amity",
    collegeBadge: "Amity Online • AMIGO Portal",
    deliveryTag: "Scored 28.7 / 30 Marks in Assignments",
    statusTime: "Thu, 17 Sep",
    messages: [
      {
        sender: "us",
        text: "Krdiya bhai",
        time: "4:43 PM"
      },
      {
        sender: "us",
        text: "Done 👍 your assisgmnets",
        time: "4:43 PM"
      },
      {
        sender: "us",
        portalPreview: {
          portalType: "amigo-single",
          studentName: "Gokul S .",
          courseName: "Fundamentals of Project Management (POM302)-Semester IV",
          grade: "28.70"
        },
        time: "4:43 PM"
      },
      {
        sender: "student",
        text: "Thanks you so much",
        time: "4:43 PM"
      },
      {
        sender: "us",
        text: "You just need 9 to paas",
        time: "4:43 PM"
      },
      {
        sender: "us",
        text: "You got 28.7",
        time: "4:44 PM"
      },
      {
        sender: "us",
        text: "More",
        time: "4:44 PM"
      },
      {
        sender: "us",
        replyTo: { sender: "You", text: "You got 28.7" },
        text: "Out of 30 marks",
        time: "4:45 PM"
      },
      {
        sender: "student",
        text: "Got it",
        time: "4:51 PM"
      }
    ]
  },
  {
    id: "amity-ali",
    imageUrl: "/WhatsApp Image 2026-10-11 at 20.06.04.jpeg",
    theme: "dark",
    clockTime: "8:05",
    contactName: "Ali AI Agency AMITY",
    collegeBadge: "Amity University • BBA/MBA",
    deliveryTag: "All 3 Subjects Done (27.8, 28.9, 25.3 / 30)",
    statusTime: "Sat, 19 Sep",
    messages: [
      {
        sender: "us",
        portalPreview: {
          portalType: "amigo-multi",
          isVideo: true,
          duration: "0:05",
          studentName: "Ali Bin tariq",
          grades: [
            { course: "Brand Management (MKTG302)-Semester V", score: "27.80" },
            { course: "Financial Planning (FIBA304)-Semester V", score: "28.90" },
            { course: "Fundamentals of International Human Resource...", score: "25.30" }
          ]
        },
        text: "Bro done all 3 assignments",
        time: "1:31 PM"
      },
      {
        sender: "student",
        text: "Shukriya bro",
        reaction: "👍",
        time: "2:28 PM"
      },
      {
        sender: "student",
        replyTo: {
          sender: "You",
          text: "Aap if future me mba vgera kro to please let me know mere through krana bhai admission Will help in smooth process and cashbacks"
        },
        text: "Zaroor",
        time: "2:28 PM"
      }
    ]
  },
  {
    id: "amity-vikas",
    imageUrl: "/WhatsApp Image 2026-10-11 at 20.06.01.jpeg",
    theme: "light",
    clockTime: "12:40",
    contactName: "Vikas Kumar Amity",
    collegeBadge: "Amity Digital Campus • Project + Viva",
    deliveryTag: "Report Uploaded + Viva Answered",
    statusTime: "Today, 10:28 PM",
    messages: [
      {
        sender: "us",
        portalPreview: {
          portalType: "viva-answers",
          isVideo: true,
          duration: "0:02",
          topic: "Mobile Investment Apps & Retail Participation (4 Marks Each)"
        },
        text: "Bro it is done 👍",
        time: "10:18 PM"
      },
      {
        sender: "us",
        portalPreview: {
          portalType: "amity-4tiles",
          studentName: "VIKAS KUMAR",
          greenUnderlines: true
        },
        time: "10:19 PM"
      },
      {
        sender: "student",
        text: "Thank you 👍",
        time: "10:28 PM"
      },
      {
        sender: "us",
        replyTo: { sender: "Vikas Kumar Amity", text: "Thank you 👍" },
        text: "Welcome bhai",
        time: "10:28 PM"
      }
    ]
  },
  {
    id: "amity-sonam",
    imageUrl: "/WhatsApp Image 2026-10-11 at 20.06.02.jpeg",
    theme: "dark",
    clockTime: "8:00",
    contactName: "Sonam Amity",
    collegeBadge: "Amity University • Finance Project",
    deliveryTag: "Stock Market Project + Viva Accepted",
    statusTime: "Today, 1:51 PM",
    messages: [
      {
        sender: "us",
        portalPreview: {
          portalType: "viva-answers",
          isVideo: false,
          topic: "Core Focus: Analytical research project on Indian stock market & Groww, Zerodha, Upstox (120M+ demat accounts)"
        },
        time: "1:47 PM"
      },
      {
        sender: "us",
        text: "Tunhara project bhi",
        time: "1:50 PM"
      },
      {
        sender: "us",
        text: "Stock market ka bnaya h",
        time: "1:50 PM"
      },
      {
        sender: "student",
        text: "😍 Kya bttt h",
        time: "1:50 PM"
      },
      {
        sender: "student",
        text: "Accepted ho gyi n ?",
        time: "1:51 PM"
      },
      {
        sender: "us",
        replyTo: { sender: "Sonam Amity", text: "Accepted ho gyi n ?" },
        text: "Haan hogyi h",
        time: "1:51 PM"
      },
      {
        sender: "us",
        text: "Chalo chill kro",
        time: "1:51 PM"
      }
    ]
  },
  {
    id: "amity-manav",
    imageUrl: "/WhatsApp Image 2026-10-11 at 20.06.03 (1).jpeg",
    theme: "dark",
    clockTime: "8:03",
    contactName: "Manav Amity",
    collegeBadge: "Amity Online • Major Project",
    deliveryTag: "Started Before Payment & Completed",
    statusTime: "Today, 12:38 PM",
    messages: [
      {
        sender: "us",
        portalPreview: {
          portalType: "viva-answers",
          isVideo: true,
          duration: "0:21",
          topic: "Project Report + Plagiarism Report Uploaded on Portal"
        },
        text: "Sabse pehle tumhara hi krdiya\nTumhare pay krne se pehle hi start krdiya tha tumhara",
        time: "12:36 PM"
      },
      {
        sender: "us",
        text: "Ho bhi gaya complete",
        time: "12:37 PM"
      },
      {
        sender: "us",
        portalPreview: {
          portalType: "amity-4tiles",
          studentName: "Manav Arora"
        },
        text: "Yaha update hogya h",
        time: "12:37 PM"
      },
      {
        sender: "student",
        text: "Ab iske number vagera kab update...",
        time: "12:39 PM"
      }
    ]
  },
  {
    id: "amity-tushar",
    imageUrl: "/WhatsApp Image 2026-10-11 at 20.06.03 (2).jpeg",
    theme: "dark",
    clockTime: "8:04",
    contactName: "Tushar dahima Amity",
    collegeBadge: "Amity University • Project + Viva",
    deliveryTag: "Full Project + Online Viva Completed",
    statusTime: "Today, 7:29 PM",
    messages: [
      {
        sender: "student",
        text: "And assignment kab tak krr skte h vse !",
        time: "3:44 PM"
      },
      {
        sender: "student",
        isCall: true,
        callText: "Voice call • 2 min",
        time: "3:45 PM"
      },
      {
        sender: "us",
        replyTo: {
          sender: "Tushar dahima Amity",
          text: "And assignment kab tak krr skte h vse !"
        },
        text: "Jab portal khulega tb hoga",
        time: "3:47 PM"
      },
      {
        sender: "student",
        text: "Bhai hogya?",
        time: "6:26 PM"
      },
      {
        sender: "us",
        portalPreview: {
          portalType: "amity-4tiles",
          isVideo: true,
          duration: "0:17",
          studentName: "Tushar Dahima"
        },
        text: "Haan bro completed",
        time: "6:40 PM"
      },
      {
        sender: "us",
        text: "Viva bhi krdiya",
        time: "6:40 PM"
      },
      {
        sender: "student",
        text: "Ok thanks bro",
        reaction: "👍",
        time: "7:26 PM"
      },
      {
        sender: "us",
        text: "ur welcome bro",
        time: "7:29 PM"
      }
    ]
  },
  {
    id: "amity-sourav",
    imageUrl: "/WhatsApp Image 2026-10-11 at 20.06.01 (2).jpeg",
    theme: "dark",
    clockTime: "7:59",
    contactName: "Sourav Santra Amity",
    collegeBadge: "Amity Online • 2:13 AM Delivery",
    deliveryTag: "2 AM Late-Night Portal Upload",
    statusTime: "Today, 2:13 AM",
    messages: [
      {
        sender: "us",
        portalPreview: {
          portalType: "viva-answers",
          isVideo: false,
          topic: "Amity Online Portal -> Project Submission Section"
        },
        text: "Project submission me",
        reaction: "👍",
        time: "2:05 AM"
      },
      {
        sender: "student",
        text: "Okay\nUpload complete ho jaye to bolna",
        time: "2:08 AM"
      },
      {
        sender: "us",
        text: "Hn okay",
        time: "2:08 AM"
      },
      {
        sender: "us",
        portalPreview: {
          portalType: "amity-4tiles",
          isVideo: true,
          duration: "0:24",
          studentName: "Sourav Santra"
        },
        text: "All done",
        time: "2:13 AM"
      }
    ]
  },
  {
    id: "amity-r",
    imageUrl: "/WhatsApp Image 2026-10-11 at 20.06.00.jpeg",
    theme: "dark",
    clockTime: "7:56",
    contactName: "R Amity",
    collegeBadge: "Amity Digital Campus • NTCC",
    deliveryTag: "100% Safe University Submission",
    statusTime: "Today, 3:10 PM",
    messages: [
      {
        sender: "us",
        portalPreview: {
          portalType: "amity-4tiles",
          isVideo: true,
          duration: "0:05",
          studentName: "R. Amity"
        },
        time: "2:57 PM"
      },
      {
        sender: "student",
        text: "Okay will update in the evening",
        reaction: "👍",
        time: "3:09 PM"
      },
      {
        sender: "us",
        text: "Okay",
        time: "3:10 PM"
      },
      {
        sender: "student",
        text: "Hope there won't be any problem further with the university !",
        time: "3:10 PM"
      },
      {
        sender: "us",
        replyTo: {
          sender: "R Amity",
          text: "Hope there won't be any problem further with the university !"
        },
        text: "Yes dont worry",
        reaction: "👍",
        time: "3:10 PM"
      }
    ]
  },
  {
    id: "amity-himanshu",
    imageUrl: "/WhatsApp Image 2026-10-11 at 20.06.02 (1).jpeg",
    theme: "dark",
    clockTime: "8:01",
    contactName: "Himanshu Goyal Amity",
    collegeBadge: "Amity University • BBA Program",
    deliveryTag: "Project Work + Plagiarism Report",
    statusTime: "Today, 11:15 AM",
    messages: [
      {
        sender: "us",
        portalPreview: {
          portalType: "amity-4tiles",
          isVideo: true,
          duration: "0:05",
          studentName: "Himanshu Goyal"
        },
        time: "11:09 AM"
      },
      {
        sender: "us",
        portalPreview: {
          portalType: "viva-answers",
          isVideo: true,
          duration: "0:10",
          topic: "BBA Program: Exploring How Mobile Investment Platforms Shape the..."
        },
        time: "11:09 AM"
      },
      {
        sender: "student",
        text: "Bhai ab ye evaluate kitne din m hoga",
        time: "11:14 AM"
      },
      {
        sender: "student",
        text: "Iski project report aur plagiarism report mere paas bhi bhejdo",
        time: "11:15 AM"
      }
    ]
  },
  {
    id: "amity-rishi",
    imageUrl: "/WhatsApp Image 2026-10-11 at 20.06.02 (2).jpeg",
    theme: "dark",
    clockTime: "8:01",
    contactName: "rishi Amity",
    collegeBadge: "Amity Online • Direct Portal Upload",
    deliveryTag: "Done in 2 Hours via Portal Login",
    statusTime: "Today, 2:49 PM",
    messages: [
      {
        sender: "us",
        text: "Mai abhi thori der me kr dunga\nApni amity ki id pswrd bhej dena",
        time: "10:53 AM"
      },
      {
        sender: "student",
        text: "Thik h bro",
        time: "10:54 AM"
      },
      {
        sender: "student",
        text: "Rishikesh Chowdhury\nA9921223000878(el)\nrishikesh9@amityonline.com\nAU07•••••••• (Password Hidden)",
        reaction: "👍",
        time: "10:54 AM"
      },
      {
        sender: "us",
        portalPreview: {
          portalType: "amity-4tiles",
          isVideo: true,
          duration: "0:20",
          studentName: "Rishikesh Chowdhury"
        },
        time: "12:49 PM"
      },
      {
        sender: "student",
        text: "Thanks a lot bro.\nRe exam ka schedule pta h kya aapko?",
        time: "2:49 PM"
      }
    ]
  },
  {
    id: "amity-naman",
    imageUrl: "/WhatsApp Image 2026-10-11 at 20.06.01 (1).jpeg",
    theme: "dark",
    clockTime: "7:57",
    contactName: "Naman Garg Amity",
    collegeBadge: "Amity Online • Major Finance Project",
    deliveryTag: "Major Project Report on Mobile Investment Platforms",
    statusTime: "Today, 12:15 AM",
    messages: [
      {
        sender: "us",
        text: "Okay bhai",
        time: "12:15 AM"
      },
      {
        sender: "student",
        text: "Thanks bhaiya",
        time: "12:15 AM"
      },
      {
        sender: "us",
        text: "MAJOR PROJECT REPORT ON EXPLORING HOW MOBILE INVESTMENT PLATFORMS SHAPE...",
        time: "12:15 AM"
      }
    ]
  },
  {
    id: "amity-sahil",
    imageUrl: "/WhatsApp Image 2026-10-11 at 20.07.31.jpeg",
    theme: "dark",
    clockTime: "8:07",
    contactName: "Sahil Tomar Amity",
    collegeBadge: "Amity Online • Urgent Delivery",
    deliveryTag: "Urgent Same-Day Submission & Voice Note",
    statusTime: "Today, 10:03 AM",
    messages: [
      {
        sender: "us",
        text: "Okay bhai",
        time: "9:46 AM"
      },
      {
        sender: "student",
        text: "Voice Note (0:20)",
        time: "10:03 AM"
      },
      {
        sender: "us",
        text: "Hnji bhai",
        time: "10:04 AM"
      }
    ]
  }
];

// To replace with your own photos of reports/code, paste the image path in `imageUrl`
const WORK_PROOFS = [
  {
    id: "work-1",
    imageUrl: "",
    type: "ntcc",
    badge: "Amity / Portal Standard",
    title: "AmityOnline Digital Campus & NTCC Report + Viva Voce",
    subtitle: "Complete end-to-end portal upload: Project Summary (Saved), Project Report (Uploaded), Viva Voce (Answered), and Project Work (Submitted) along with Plagiarism Certificate.",
    stats: ["All 4 Portal Tiles Done", "28+ / 30 Marks Avg", "Synopsis + Final Report"],
    whatsappPrompt: "Hi TheAssignmate! I saw your AmityOnline portal & NTCC report proofs. I need help with my project/synopsis."
  },
  {
    id: "work-2",
    imageUrl: "",
    type: "turnitin",
    badge: "Official Originality Proof",
    title: "Turnitin Plagiarism (<5%) & 0% AI Check Certificate",
    subtitle: "Every report and assignment is written from scratch and verified before delivery. You receive the official Turnitin Similarity Receipt and AI-Free verification PDF along with your file.",
    stats: ["4% Similarity Index", "0% AI Writing Detected", "No Repository Storage"],
    whatsappPrompt: "Hi TheAssignmate! I need a 100% plagiarism-free and 0% AI assignment/report with a Turnitin check."
  },
  {
    id: "work-3",
    imageUrl: "",
    type: "code",
    badge: "B.Tech / BCA / MCA",
    title: "B.Tech Final Year CSE / AI-ML Working Project + Source Code",
    subtitle: "Complete working code (Python, Deep Learning, React/Next.js, MERN, Android, IoT) with dataset, architecture diagrams, live AnyDesk setup on your laptop, and 1-on-1 Viva explanation.",
    stats: ["Working Source Code", "Live Laptop Setup", "15-Min Viva Prep Call"],
    whatsappPrompt: "Hi TheAssignmate! I need a working B.Tech/BCA coding or AI-ML project with source code and viva support."
  },
  {
    id: "work-4",
    imageUrl: "/WhatsApp Image 2026-10-11 at 20.06.01 (1).jpeg",
    type: "mba",
    badge: "MBA / BBA / Commerce",
    title: "AMIGO Assignments (28+/30 Score), Finance Models & Viva PPT",
    subtitle: "Guaranteed high-scoring AMIGO portal assignments, Stock Market / Corporate Valuation projects, Excel DCF models, and executive 15-slide presentation decks.",
    stats: ["28.7 / 30 AMIGO Score", "Stock Market & Finance", "Complete Portal Upload"],
    whatsappPrompt: "Hi TheAssignmate! I need help with my MBA/BBA assignments, project report, or portal submission."
  }
];

const QUICK_SELECTORS = [
  {
    id: "selector-1",
    emoji: "📝",
    title: "College Assignment / AMIGO Portal (28+/30 Marks)",
    desc: "Semester assignments, AMIGO quizzes, lab manuals & case studies with guaranteed high grades.",
    tag: "28.7 / 30 Proven Score",
    tagColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    waText: "Hi TheAssignmate, I need help with my college assignments. My deadline is..."
  },
  {
    id: "selector-2",
    emoji: "📘",
    title: "Amity NTCC / Project Report + Viva Voce Upload",
    desc: "Direct portal upload for Project Summary, Project Report, Viva Voce answers & Blackbook formatting.",
    tag: "Amity Specialist",
    tagColor: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
    waText: "Hi TheAssignmate, I need help with my Amity Project Report / Viva Voce / NTCC submission..."
  },
  {
    id: "selector-3",
    emoji: "💻",
    title: "Coding / AI-ML / Web Project (With Viva Help)",
    desc: "Full source code, IEEE report, AnyDesk setup on your laptop & 1-on-1 Viva walkthrough.",
    tag: "Code + Viva Prep",
    tagColor: "bg-sky-500/15 text-sky-300 border-sky-500/30",
    waText: "Hi TheAssignmate, I need a working technical project with code for my college submission..."
  },
  {
    id: "selector-4",
    emoji: "🚨",
    title: "Urgent Overnight Work (Under 24 Hours)",
    desc: "Portal closing tonight or at 2 AM? Instant priority allocation for fast completion & upload.",
    tag: "Express 6–24 Hrs",
    tagColor: "bg-rose-500/15 text-rose-300 border-rose-500/30",
    waText: "Hi TheAssignmate! I have an URGENT submission due within 24 hours. Can you help?"
  }
];

// Helper function to generate clean WhatsApp URLs
const getWhatsAppUrl = (customText) => {
  const cleanNumber = WHATSAPP_NUMBER.replace(/[^0-9A-Za-z]/g, '');
  const encodedText = encodeURIComponent(
    customText || "Hi TheAssignmate! I need help with an assignment/project. Here are my details:"
  );
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
};

const LaptopPortalThumbnail = ({ preview }) => {
  if (!preview) return null;

  // 1. AmityOnline Digital Campus 4-Tile Platform Overview (Saved, Uploaded, Answered, Submitted)
  if (preview.portalType === "amity-4tiles") {
    return (
      <div className="relative rounded-lg overflow-hidden border border-slate-600/60 mb-1.5 bg-[#E8ECEF] text-slate-800 shadow-inner">
        {/* Top Laptop Browser + Amity Blue Header */}
        <div className="bg-[#1A3B6E] text-white px-2.5 py-1 flex items-center justify-between text-[8.5px] font-semibold">
          <span>AmityOnline Digital Campus</span>
          <span className="text-sky-200">Platform Overview</span>
          <span className="bg-white/15 px-1.5 py-0.5 rounded text-[7.5px] truncate max-w-[80px]">
            {preview.studentName || "Student"}
          </span>
        </div>

        {/* 4 Status Tiles */}
        <div className="p-2 grid grid-cols-4 gap-1 bg-[#F4F6F8]">
          {[
            { label: "Project Summary", status: "Saved", underline: false },
            { label: "Project Report", status: "Uploaded", underline: preview.greenUnderlines },
            { label: "Viva Voce", status: "Answered", underline: preview.greenUnderlines },
            { label: "Project Work", status: "Submitted", underline: preview.greenUnderlines }
          ].map((tile, i) => (
            <div
              key={i}
              className="bg-white rounded border border-slate-300/90 p-1.5 shadow-sm flex flex-col justify-between"
            >
              <span className="text-[7px] text-slate-600 font-bold leading-tight">
                {tile.label}
              </span>
              <div className="mt-1">
                <span className="text-[7.5px] font-extrabold text-emerald-700 block">
                  {tile.status}
                </span>
                {tile.underline && (
                  <div className="h-0.5 w-full bg-[#25D366] rounded-full mt-0.5" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Tabs */}
        <div className="px-2 pb-1.5 bg-[#F4F6F8] flex items-center gap-1.5 text-[7px] text-slate-500">
          <span className="bg-white border border-slate-300 px-1.5 py-0.5 rounded font-semibold text-slate-700">
            Instruction
          </span>
          <span className="bg-white border border-slate-300 px-1.5 py-0.5 rounded">
            Project Work
          </span>
          <span className="bg-white border border-slate-300 px-1.5 py-0.5 rounded">
            Viva Submission
          </span>
        </div>

        {/* Video Play Overlay if video */}
        {preview.isVideo && (
          <div className="absolute inset-0 bg-slate-950/20 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-white/90 shadow-md flex items-center justify-center">
              <Play className="w-4 h-4 text-slate-900 fill-slate-900 ml-0.5" />
            </div>
            <span className="absolute bottom-1 left-1.5 bg-slate-950/75 text-white text-[8.5px] px-1.5 py-0.5 rounded flex items-center gap-1">
              📹 {preview.duration}
            </span>
          </div>
        )}
      </div>
    );
  }

  // 2. AMIGO Single Grade View (Gokul 28.70 / 30)
  if (preview.portalType === "amigo-single") {
    return (
      <div className="relative rounded-lg overflow-hidden border border-slate-600/60 mb-1.5 bg-white text-slate-800 p-2 shadow-inner">
        <div className="flex items-center justify-between border-b border-slate-200 pb-1">
          <span className="font-black text-[10px] tracking-tight text-[#1A3B6E]">
            AMIGO <span className="font-normal text-slate-400">≡</span>
          </span>
          <span className="text-[8px] font-semibold text-slate-600">
            {preview.studentName}
          </span>
        </div>
        <p className="text-[8px] font-bold text-slate-700 mt-1.5">Courses I am taking</p>
        <div className="mt-1 bg-slate-50 border border-slate-200 rounded p-1.5 flex items-center justify-between gap-2">
          <span className="text-[7.5px] text-blue-700 font-semibold leading-tight">
            {preview.courseName}
          </span>
          <div className="text-right shrink-0">
            <span className="text-[7px] text-slate-400 block uppercase">Grade</span>
            <span className="text-[10px] font-black text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
              {preview.grade}
            </span>
          </div>
        </div>
      </div>
    );
  }

  // 3. AMIGO Multi Grade View (Ali 27.80, 28.90, 25.30)
  if (preview.portalType === "amigo-multi") {
    return (
      <div className="relative rounded-lg overflow-hidden border border-slate-600/60 mb-1.5 bg-white text-slate-800 p-2 shadow-inner">
        <div className="flex items-center justify-between border-b border-slate-200 pb-1">
          <span className="font-black text-[9.5px] text-[#1A3B6E]">
            AMIGO • {preview.studentName}
          </span>
          <span className="text-[7.5px] text-emerald-700 font-bold">Grade Report</span>
        </div>
        <div className="mt-1 space-y-1">
          {preview.grades.map((g, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200 text-[7.5px]"
            >
              <span className="text-blue-800 font-medium truncate max-w-[165px]">
                {g.course}
              </span>
              <span className="font-extrabold text-emerald-700">{g.score}</span>
            </div>
          ))}
        </div>
        {preview.isVideo && (
          <div className="absolute inset-0 bg-slate-950/15 flex items-center justify-center">
            <div className="w-7 h-7 rounded-full bg-white/90 shadow flex items-center justify-center">
              <Play className="w-3.5 h-3.5 text-slate-900 fill-slate-900 ml-0.5" />
            </div>
            <span className="absolute bottom-1 left-1.5 bg-slate-950/75 text-white text-[8px] px-1.5 py-0.5 rounded">
              📹 {preview.duration}
            </span>
          </div>
        )}
      </div>
    );
  }

  // 4. Viva Voce / Project Submission Screen View
  return (
    <div className="relative rounded-lg overflow-hidden border border-slate-600/60 mb-1.5 bg-[#F8FAFC] text-slate-800 p-2 shadow-inner">
      <div className="flex items-center justify-between border-b border-slate-200 pb-1">
        <span className="text-[8px] font-bold text-[#1A3B6E]">
          AmityOnline • Viva &amp; Project Portal
        </span>
        <span className="text-[7px] bg-rose-600 text-white px-1.5 py-0.5 rounded font-bold">
          4 Marks
        </span>
      </div>
      <p className="mt-1.5 text-[8px] text-slate-700 font-medium leading-snug bg-white p-1.5 rounded border border-slate-200">
        {preview.topic}
      </p>
      {preview.isVideo && (
        <div className="mt-1 flex items-center justify-between text-[8px] text-slate-600 font-semibold">
          <span className="inline-flex items-center gap-1 bg-slate-900 text-white px-1.5 py-0.5 rounded">
            ▶ Video Proof ({preview.duration})
          </span>
          <span className="text-emerald-700 font-bold">✓ Submitted</span>
        </div>
      )}
    </div>
  );
};

// Renders the uploaded screenshot OR our pixel-faithful iOS WhatsApp chat UI
const WhatsAppScreenCard = ({ proof, onZoom }) => {
  const [imgError, setImgError] = useState(false);
  const isLight = proof.theme === "light";

  return (
    <div
      onClick={() => onZoom({ type: "chat", data: proof })}
      className="group relative flex flex-col rounded-2xl bg-[#0B141A] border border-slate-800 hover:border-[#25D366]/70 shadow-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
    >
      {/* Top Delivery Badge Strip */}
      <div className="bg-slate-900 px-3.5 py-2 border-b border-slate-800 flex items-center justify-between text-xs">
        <span className="inline-flex items-center gap-1.5 font-bold text-emerald-400 truncate pr-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
          <span className="truncate">{proof.deliveryTag}</span>
        </span>
        <span className="text-slate-400 font-medium flex items-center gap-1 shrink-0 group-hover:text-white transition-colors text-[11px]">
          <ZoomIn className="w-3.5 h-3.5 text-[#25D366]" /> Zoom
        </span>
      </div>

      {/* Try rendering the raw screenshot image first if available; fallback cleanly to the exact replica */}
      {proof.imageUrl && !imgError ? (
        <div className="flex flex-col flex-1">
          <div className="relative aspect-[9/16] w-full bg-slate-950 overflow-hidden">
            <img
              src={proof.imageUrl}
              alt={`${proof.contactName} WhatsApp Proof`}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
            />
            <div className="absolute bottom-2 right-2 bg-slate-950/85 backdrop-blur-sm text-[10px] font-bold text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30">
              {BRAND_CONFIG.fullName} Verified
            </div>
          </div>
          <div className="bg-[#182229] border-t border-slate-800/80 px-3 py-2 text-[11px] flex items-center justify-between text-slate-300">
            <span className="font-semibold truncate pr-2 text-slate-200">{proof.contactName}</span>
            <span className="text-[#25D366] font-bold shrink-0">Tap to Zoom 🔍</span>
          </div>
        </div>
      ) : (
        /* Authentic iOS WhatsApp Screen Replica (Dark & Light Mode supported) */
        <div
          className={`flex flex-col flex-1 justify-between ${
            isLight ? "bg-[#EFEAE2]" : "bg-[#0B141A]"
          }`}
        >
          {/* iOS Status Bar + WhatsApp Header */}
          <div
            className={`${
              isLight
                ? "bg-[#F0F2F5] text-slate-900 border-b border-slate-300"
                : "bg-[#202C33] text-white border-b border-slate-800/80"
            } px-3.5 py-2`}
          >
            {/* Mini iOS Time & Battery row */}
            <div className="flex items-center justify-between text-[10px] font-bold opacity-80 mb-1">
              <span>{proof.clockTime || "8:02"}</span>
              <div className="flex items-center gap-1.5">
                <span>•••• LTE</span>
                <span className="bg-[#25D366] text-slate-950 px-1 rounded text-[8.5px] font-extrabold">
                  65⚡
                </span>
              </div>
            </div>

            {/* Contact Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-white font-bold text-xs shadow-inner shrink-0">
                  {proof.contactName ? proof.contactName.charAt(0).toUpperCase() : "A"}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold truncate">
                      {proof.contactName}
                    </span>
                  </div>
                  <p
                    className={`text-[10px] font-medium truncate ${
                      isLight ? "text-emerald-700" : "text-emerald-400"
                    }`}
                  >
                    {proof.collegeBadge}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 opacity-70 text-xs">
                <span>📹</span>
                <span>📞</span>
              </div>
            </div>
          </div>

          {/* WhatsApp Chat Messages Container */}
          <div
            className="p-3 space-y-2 flex-1 flex flex-col justify-center"
            style={{
              backgroundImage: isLight
                ? "radial-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 0)"
                : "radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 0)",
              backgroundSize: "16px 16px"
            }}
          >
            {proof.statusTime && (
              <div
                className={`mx-auto text-[9.5px] px-2.5 py-0.5 rounded-md mb-0.5 font-medium ${
                  isLight
                    ? "bg-white/90 text-slate-600 shadow-sm"
                    : "bg-[#182229] text-slate-400 border border-slate-800/80"
                }`}
              >
                {proof.statusTime}
              </div>
            )}

            {proof.messages.map((msg, idx) => {
              const isUs = msg.sender === "us";
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col max-w-[88%] rounded-xl px-2.5 py-1.5 text-xs leading-snug shadow-sm ${
                    isUs
                      ? isLight
                        ? "self-end bg-[#D9FDD3] text-slate-900 rounded-tr-none"
                        : "self-end bg-[#005C4B] text-white rounded-tr-none"
                      : isLight
                      ? "self-start bg-white text-slate-900 rounded-tl-none"
                      : "self-start bg-[#202C33] text-slate-100 rounded-tl-none border border-slate-800/70"
                  }`}
                >
                  {/* Quoted Reply Box */}
                  {msg.replyTo && (
                    <div
                      className={`mb-1 rounded p-1.5 border-l-4 border-[#25D366] text-[10px] ${
                        isLight ? "bg-black/5 text-slate-700" : "bg-black/25 text-slate-300"
                      }`}
                    >
                      <span className="font-bold text-[#25D366] block">
                        {msg.replyTo.sender}
                      </span>
                      <span className="line-clamp-2">{msg.replyTo.text}</span>
                    </div>
                  )}

                  {/* Voice Call Pill */}
                  {msg.isCall && (
                    <div className="flex items-center gap-2 py-0.5">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <PhoneCall className="w-3 h-3 text-[#25D366]" />
                      </div>
                      <span className="text-[11px] font-semibold">{msg.callText}</span>
                    </div>
                  )}

                  {/* Laptop Portal Photo / Video Preview */}
                  {msg.portalPreview && (
                    <LaptopPortalThumbnail preview={msg.portalPreview} />
                  )}

                  {/* Message Text */}
                  {msg.text && (
                    <p className="text-[11.5px] leading-snug whitespace-pre-line break-words">
                      {msg.text}
                    </p>
                  )}

                  {/* Timestamp + Blue Double Ticks */}
                  <div className="flex items-center justify-end gap-1 mt-0.5">
                    <span
                      className={`text-[9px] ${
                        isLight ? "text-slate-500" : "text-slate-300/75"
                      }`}
                    >
                      {msg.time}
                    </span>
                    {isUs && <CheckCheck className="w-3 h-3 text-[#53BDEB]" />}
                  </div>

                  {/* Emoji Reaction Badge */}
                  {msg.reaction && (
                    <span
                      className={`absolute -bottom-2 ${
                        isUs ? "right-2" : "left-2"
                      } text-[10px] px-1.5 py-0.2 rounded-full shadow border ${
                        isLight
                          ? "bg-white border-slate-200"
                          : "bg-[#202C33] border-slate-700"
                      }`}
                    >
                      {msg.reaction}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Watermark Bar */}
          <div
            className={`px-3 py-1.5 text-[10px] flex items-center justify-between border-t ${
              isLight
                ? "bg-[#F0F2F5] border-slate-300 text-slate-600"
                : "bg-[#182229] border-slate-800/80 text-slate-400"
            }`}
          >
            <span>🔒 Verified {BRAND_CONFIG.fullName} Proof</span>
            <span className="text-[#25D366] font-bold">Tap to Enlarge</span>
          </div>
        </div>
      )}
    </div>
  );
};

const DeliverableVisualPreview = ({ work }) => {
  if (work.imageUrl) {
    return (
      <div className="w-full h-56 sm:h-64 bg-slate-900 overflow-hidden">
        <img
          src={work.imageUrl}
          alt={work.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    );
  }

  // 1. Amity NTCC Synopsis & Blackbook Report Mockup
  if (work.type === "ntcc") {
    return (
      <div className="w-full h-60 bg-gradient-to-br from-slate-900 via-indigo-950/60 to-slate-900 p-4 flex items-center justify-center gap-3 overflow-hidden relative">
        {/* Main Report Page */}
        <div className="w-44 bg-white text-slate-900 rounded-lg shadow-2xl p-3.5 border border-slate-200 transform -rotate-2 group-hover:rotate-0 transition-transform duration-300">
          <div className="text-center border-b border-slate-200 pb-2">
            <span className="text-[8px] font-bold tracking-widest uppercase text-indigo-700 block">
              AMITY UNIVERSITY
            </span>
            <h4 className="text-[10px] font-extrabold text-slate-900 mt-0.5 leading-tight">
              NTCC MAJOR PROJECT REPORT
            </h4>
            <p className="text-[7.5px] text-slate-500 mt-0.5">
              Submitted in partial fulfillment of B.Tech / MBA
            </p>
          </div>
          <div className="mt-2 space-y-1 text-[7.5px] text-slate-700">
            <div className="flex justify-between bg-slate-100 px-1.5 py-0.5 rounded">
              <span className="font-semibold">Format:</span>
              <span className="text-emerald-700 font-bold">Times New Roman 12pt</span>
            </div>
            <div className="flex justify-between bg-slate-100 px-1.5 py-0.5 rounded">
              <span className="font-semibold">WPR Logs:</span>
              <span className="text-indigo-700 font-bold">Week 1–12 Approved</span>
            </div>
            <div className="flex justify-between bg-slate-100 px-1.5 py-0.5 rounded">
              <span className="font-semibold">Chapters:</span>
              <span>Intro, Lit Review, Analysis</span>
            </div>
          </div>
          <div className="mt-2 pt-1.5 border-t border-slate-200 flex items-center justify-between text-[7px] text-slate-500">
            <span>Faculty Guide Signed</span>
            <span className="bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">
              APPROVED
            </span>
          </div>
        </div>

        {/* Floating WPR & Synopsis Stamp */}
        <div className="hidden sm:flex flex-col gap-2 w-36">
          <div className="bg-slate-800/90 border border-slate-700 rounded-lg p-2.5 text-left shadow-lg">
            <span className="text-[10px] font-bold text-emerald-400 block">
              ✓ Synopsis + WPRs
            </span>
            <p className="text-[9.5px] text-slate-300 mt-0.5 leading-snug">
              Exact margins (1.5&quot; left), Certificate, Declaration & Bibliography.
            </p>
          </div>
          <div className="bg-indigo-950/90 border border-indigo-500/30 rounded-lg p-2.5 text-left shadow-lg">
            <span className="text-[10px] font-bold text-indigo-300 block">
              ✓ Ready to Print / Upload
            </span>
            <p className="text-[9.5px] text-slate-300 mt-0.5 leading-snug">
              Delivered in both Editable MS Word (.docx) & PDF.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // 2. Turnitin Plagiarism & 0% AI Check Certificate Mockup
  if (work.type === "turnitin") {
    return (
      <div className="w-full h-60 bg-gradient-to-br from-slate-900 via-emerald-950/40 to-slate-900 p-4 flex items-center justify-center relative overflow-hidden">
        <div className="w-full max-w-sm bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden text-slate-800">
          {/* Header bar */}
          <div className="bg-slate-900 text-white px-3.5 py-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#25D366]" />
              <span className="text-[11px] font-bold tracking-wide">
                ORIGINALITY & AI VERIFICATION REPORT
              </span>
            </div>
            <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-semibold">
              Verified Receipt
            </span>
          </div>

          {/* Metrics Grid */}
          <div className="p-3.5 grid grid-cols-2 gap-3 bg-slate-50">
            <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-sm">
              <span className="text-[10px] text-slate-500 font-semibold uppercase block">
                Similarity Index
              </span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-2xl font-black text-emerald-600">4%</span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                  PASSED (&lt;10%)
                </span>
              </div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-emerald-500 h-full w-[8%]" />
              </div>
            </div>

            <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-sm">
              <span className="text-[10px] text-slate-500 font-semibold uppercase block">
                AI Writing Detected
              </span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-2xl font-black text-indigo-600">0%</span>
                <span className="text-[10px] font-bold text-indigo-700 bg-indigo-100 px-1.5 py-0.5 rounded">
                  100% HUMAN
                </span>
              </div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-indigo-500 h-full w-[2%]" />
              </div>
            </div>
          </div>

          <div className="px-3.5 py-2 bg-white border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-600">
            <span>✓ Non-Repository Check (Safe for College Upload)</span>
            <span className="font-bold text-slate-800">PDF Attached</span>
          </div>
        </div>
      </div>
    );
  }

  // 3. B.Tech Coding / AI-ML Project Mockup
  if (work.type === "code") {
    return (
      <div className="w-full h-60 bg-[#0D1117] p-4 flex flex-col justify-between font-mono text-left relative overflow-hidden border-b border-slate-800">
        {/* IDE Window Header */}
        <div className="flex items-center justify-between bg-[#161B22] px-3 py-1.5 rounded-t-lg border border-slate-800">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-[10px] text-slate-300 ml-2 font-sans font-medium">
              train_model.py — Final_Year_Project_Code
            </span>
          </div>
          <span className="text-[9.5px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-sans font-semibold">
            ✓ Build Passing
          </span>
        </div>

        {/* Code & Output Split */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-[#090D11] p-3 rounded-b-lg border-x border-b border-slate-800 flex-1 text-[10.5px]">
          <div className="space-y-1 text-slate-300 overflow-hidden">
            <p><span className="text-pink-400">import</span> tensorflow <span className="text-pink-400">as</span> tf</p>
            <p><span className="text-pink-400">from</span> fastapi <span className="text-pink-400">import</span> FastAPI</p>
            <p className="text-slate-500"># Custom CNN + React Dashboard</p>
            <p><span className="text-sky-400">model</span> = load_weights(<span className="text-amber-300">&apos;best_v4.h5&apos;</span>)</p>
            <p><span className="text-emerald-400">Validation Accuracy:</span> <span className="text-white font-bold">98.42%</span></p>
          </div>
          <div className="bg-[#161B22] rounded p-2 border border-slate-800 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[9.5px] text-slate-400 font-sans">
              <span>Included Deliverables:</span>
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <ul className="text-[10px] text-slate-200 font-sans space-y-1 mt-1">
              <li className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[#25D366]" /> Complete Source Code + DB</li>
              <li className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[#25D366]" /> Setup via AnyDesk / Meet</li>
              <li className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[#25D366]" /> Viva Q&A Preparation Sheet</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // 4. MBA Case Study & Financial Model Mockup
  return (
    <div className="w-full h-60 bg-gradient-to-br from-slate-900 via-sky-950/50 to-slate-900 p-4 flex items-center justify-center relative overflow-hidden">
      <div className="w-full max-w-sm bg-white text-slate-900 rounded-xl shadow-2xl border border-slate-200 p-3.5">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <div>
            <span className="text-[9px] font-bold uppercase tracking-wider text-sky-700">
              EXECUTIVE CASE STUDY & DCF VALUATION
            </span>
            <h4 className="text-xs font-extrabold text-slate-900">
              Financial Modeling + 15-Slide Viva PPT
            </h4>
          </div>
          <BarChart3 className="w-5 h-5 text-sky-600" />
        </div>

        {/* Mini Bar Chart & Metrics */}
        <div className="grid grid-cols-3 gap-2 my-2.5">
          <div className="bg-slate-50 p-2 rounded border border-slate-200">
            <span className="text-[8.5px] text-slate-500 block">NPV / IRR Calc</span>
            <span className="text-xs font-black text-slate-900">24.8% IRR</span>
          </div>
          <div className="bg-slate-50 p-2 rounded border border-slate-200">
            <span className="text-[8.5px] text-slate-500 block">SPSS Regression</span>
            <span className="text-xs font-black text-emerald-700">p &lt; 0.001</span>
          </div>
          <div className="bg-slate-50 p-2 rounded border border-slate-200">
            <span className="text-[8.5px] text-slate-500 block">Slide Deck</span>
            <span className="text-xs font-black text-indigo-700">15 Slides</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] bg-sky-50 text-sky-900 px-2.5 py-1.5 rounded font-medium">
          <span>Includes Excel (.xlsx) + Word Report + PPTX</span>
          <span className="font-bold text-emerald-700">✓ Ready for Viva</span>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState("chats"); // "chats" | "work"
  const [lightboxItem, setLightboxItem] = useState(null); // null | { type: 'chat' | 'work', data: ... }

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setLightboxItem(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 font-sans selection:bg-[#25D366] selection:text-slate-950 pb-20 md:pb-0">
      {/* =====================================================================
          SECTION 1: MINIMAL STICKY HEADER & HIGH-IMPACT HERO
      ===================================================================== */}
      <header className="sticky top-0 z-40 bg-[#0F172A]/90 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-2">
          {/* Brand Logo */}
          <a
            href={getWhatsAppUrl("Hi TheAssignmate! I visited your website and need help with an assignment/project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#25D366] to-emerald-600 flex items-center justify-center shadow-lg shadow-[#25D366]/20">
              <GraduationCap className="w-5 h-5 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-white">
                {BRAND_CONFIG.name}
                <span className="text-[#25D366]">{BRAND_CONFIG.accentName}</span>
              </span>
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-emerald-400 font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
                </span>
                <span>{BRAND_CONFIG.statusText}</span>
              </div>
            </div>
          </a>

          {/* Header Quick WhatsApp CTA */}
          <a
            href={getWhatsAppUrl("Hi TheAssignmate! I need quick help with a college assignment/project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 text-slate-950 font-bold text-xs sm:text-sm px-3.5 sm:px-4 py-2.5 rounded-xl shadow-lg shadow-[#25D366]/20 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </header>

      {/* HERO BANNER */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-16 border-b border-slate-800/80">
        {/* Subtle Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-[#25D366]/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          {/* Top Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-slate-800/90 border border-slate-700/80 rounded-full px-4 py-1.5 mb-5 shadow-sm">
            <Award className="w-4 h-4 text-[#25D366] shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-slate-200">
              Trusted by <span className="text-[#25D366] font-bold">25k+ Students</span> • <span className="text-[#25D366] font-bold">40k+ Assignments Done</span> in Amity, VIT, SRM, DU &amp; Manipal
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.18] sm:leading-[1.15]">
            Get Your College Assignments,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25D366] via-emerald-300 to-teal-300">
              Amity NTCC &amp; Portal Projects
            </span>{" "}
            Done On Time with <span className="text-[#25D366]">TheAssignmate</span>.
          </h1>

          {/* Sub-text */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            100% Confidential • Turnitin &amp; AI Safe • Direct AMIGO / AmityOnline Portal Upload + Viva Support.{" "}
            <span className="text-white font-semibold">
              No long forms—just send your topic or PDF directly on WhatsApp.
            </span>
          </p>

          {/* Primary Giant WhatsApp Button */}
          <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={getWhatsAppUrl("Hi TheAssignmate! I need help with an assignment/project. Here are my details:")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.99] text-slate-950 font-extrabold text-base sm:text-lg px-7 py-4 rounded-2xl shadow-xl shadow-[#25D366]/25 transition-all duration-200 group"
            >
              <MessageCircle className="w-6 h-6 fill-slate-950 shrink-0 group-hover:scale-110 transition-transform" />
              <span>Send Your Topic on WhatsApp</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Key Metrics Counter Strip (40k+ & 25k+) */}
          <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto text-center">
            <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl shadow-md hover:border-[#25D366]/40 transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-[#25D366]">40k+</div>
              <div className="text-[11px] sm:text-xs text-slate-300 font-medium mt-0.5">Assignments Delivered</div>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl shadow-md hover:border-[#25D366]/40 transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-white">25k+</div>
              <div className="text-[11px] sm:text-xs text-slate-300 font-medium mt-0.5">Students Guided</div>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl shadow-md hover:border-[#25D366]/40 transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-white">28.7<span className="text-sm font-normal text-slate-400">/30</span></div>
              <div className="text-[11px] sm:text-xs text-slate-300 font-medium mt-0.5">Avg AMIGO Score</div>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl shadow-md hover:border-[#25D366]/40 transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-[#25D366]">2 Mins</div>
              <div className="text-[11px] sm:text-xs text-slate-300 font-medium mt-0.5">Avg WhatsApp Reply</div>
            </div>
          </div>

          {/* 3 Trust Pills Below Button */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <div className="inline-flex items-center gap-1.5 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-slate-200">
              <span>⚡ 24-Hour Urgent Delivery</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-slate-200">
              <span>🔒 100% Private (Name Hidden)</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-slate-200">
              <span>✅ Pay in Easy Steps via UPI</span>
            </div>
          </div>

          {/* Supported Universities Pill Bar */}
          <div className="mt-7 pt-6 border-t border-slate-800/80">
            <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-2.5">
              We Follow Exact Formatting &amp; Rubrics For:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              {BRAND_CONFIG.trustedColleges.map((college, index) => (
                <span
                  key={index}
                  className="text-xs bg-slate-800/60 text-slate-300 border border-slate-700/60 px-2.5 py-1 rounded-md font-medium"
                >
                  {college}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {}
      {/* =====================================================================
          SECTION 2: PROOF OF WORK & STUDENT CHATS (MOST IMPORTANT SECTION)
      ===================================================================== */}
      <section id="proofs" className="py-12 sm:py-16 bg-slate-950/60 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/20 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" /> 100% Real Student Deliveries
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white">
              Proof of Work &amp; Student WhatsApp Chats
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400">
              Trusted by 25k+ students with 40k+ verified assignment &amp; project deliveries. Student names and phone numbers are partially blurred to protect 100% privacy. Tap any card to zoom in.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="mt-6 flex items-center justify-center">
            <div className="bg-slate-900 p-1.5 rounded-2xl border border-slate-800 inline-flex gap-1.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setActiveTab("chats")}
                className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  activeTab === "chats"
                    ? "bg-[#25D366] text-slate-950 shadow-md"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Chat Proofs ({CHAT_PROOFS.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("work")}
                className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  activeTab === "work"
                    ? "bg-[#25D366] text-slate-950 shadow-md"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <FileCheck2 className="w-4 h-4" />
                <span>Completed Projects &amp; Reports ({WORK_PROOFS.length})</span>
              </button>
            </div>
          </div>

          {/* TAB 1 CONTENT: WHATSAPP CHAT SCREENSHOTS */}
          {activeTab === "chats" && (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {CHAT_PROOFS.map((proof) => (
                <WhatsAppScreenCard
                  key={proof.id}
                  proof={proof}
                  onZoom={(item) => setLightboxItem(item)}
                />
              ))}
            </div>
          )}

          {/* TAB 2 CONTENT: COMPLETED PROJECTS & REPORTS */}
          {activeTab === "work" && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {WORK_PROOFS.map((work) => (
                <div
                  key={work.id}
                  className="group rounded-2xl bg-slate-900 border border-slate-800 hover:border-[#25D366]/60 overflow-hidden shadow-xl flex flex-col justify-between transition-all duration-300"
                >
                  <div>
                    {/* Visual Mockup / Image Area */}
                    <div
                      onClick={() => setLightboxItem({ type: "work", data: work })}
                      className="cursor-pointer relative"
                    >
                      <DeliverableVisualPreview work={work} />
                      <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-sm text-slate-200 text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-slate-700 flex items-center gap-1">
                        <ZoomIn className="w-3.5 h-3.5 text-[#25D366]" /> Preview
                      </div>
                    </div>

                    {/* Text Details */}
                    <div className="p-5">
                      <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-md">
                        {work.badge}
                      </span>
                      <h3 className="mt-2 text-lg font-bold text-white leading-snug">
                        {work.title}
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {work.subtitle}
                      </p>

                      {/* Stat Pills */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {work.stats.map((st, i) => (
                          <span
                            key={i}
                            className="text-xs font-semibold bg-slate-800 text-slate-200 px-2.5 py-1 rounded-lg border border-slate-700"
                          >
                            ✓ {st}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Direct WhatsApp Button for this Deliverable */}
                  <div className="px-5 pb-5 pt-2">
                    <a
                      href={getWhatsAppUrl(work.whatsappPrompt)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-slate-950 border border-[#25D366]/40 font-bold text-xs sm:text-sm py-3 px-4 rounded-xl transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Ask for Sample / Price on WhatsApp</span>
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Bottom Prompt Under Proofs */}
          <div className="mt-8 text-center">
            <a
              href={getWhatsAppUrl("Hi! Can you share a sample report or project preview for my subject?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
            >
              <span>Want to check a sample PDF for your exact subject first? Ask us on WhatsApp →</span>
            </a>
          </div>
        </div>
      </section>

      {}
      {/* =====================================================================
          SECTION 3: 1-TAP QUICK WHATSAPP SELECTOR
      ===================================================================== */}
      <section className="py-12 sm:py-16 border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
              Zero Forms • Instant Chat
            </span>
            <h2 className="mt-1.5 text-2xl sm:text-3xl font-extrabold text-white">
              What Do You Need Help With Today?
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              Just tap any option below—it will open WhatsApp with your message pre-typed so we can give you an instant quote.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {QUICK_SELECTORS.map((item) => (
              <a
                key={item.id}
                href={getWhatsAppUrl(item.waText)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 hover:border-[#25D366] p-5 flex flex-col justify-between transition-all duration-200 shadow-lg hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-2xl sm:text-3xl">{item.emoji}</span>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${item.tagColor}`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:text-[#25D366] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-800/90 flex items-center justify-between text-xs sm:text-sm font-bold text-[#25D366]">
                  <span className="inline-flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4 fill-[#25D366] text-slate-950" />
                    Tap to Open in WhatsApp
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {}
      {/* =====================================================================
          SECTION 4: 3-STEP "HOW IT WORKS" (VISUAL & SHORT)
      ===================================================================== */}
      <section className="py-12 sm:py-16 bg-slate-950/50 border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              How It Works in 3 Simple Steps
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400">
              No complicated dashboards or signups. Everything happens directly on WhatsApp.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Step 1 */}
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 relative">
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] font-black text-base flex items-center justify-center mb-3.5">
                1
              </div>
              <h3 className="text-base font-bold text-white">
                Tap WhatsApp &amp; Send Details
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Share your question PDF, Amity NTCC rubric, or project topic directly on WhatsApp along with your deadline.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 relative">
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] font-black text-base flex items-center justify-center mb-3.5">
                2
              </div>
              <h3 className="text-base font-bold text-white">
                Confirm Price &amp; Deadline
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Get an instant student-friendly quote on chat. Pay a small token advance via UPI (GPay / PhonePe / Paytm) to start work.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 relative">
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] font-black text-base flex items-center justify-center mb-3.5">
                3
              </div>
              <h3 className="text-base font-bold text-white">
                Get Files + Viva Explanation
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Review the preview/demo on WhatsApp, receive your final report or working code before deadline, plus a quick Viva prep call!
              </p>
            </div>
          </div>

          {/* Final Callout Box */}
          <div className="mt-8 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-emerald-950/80 border border-[#25D366]/30 p-6 text-center">
            <h3 className="text-lg sm:text-xl font-extrabold text-white">
              Have a Submission Due Soon? Don&apos;t Wait Until the Last Hour.
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-300">
              Message us right now on WhatsApp and get an instant reply within 2 minutes.
            </p>
            <div className="mt-4">
              <a
                href={getWhatsAppUrl("Hi! I have an upcoming college submission. Can we discuss the details?")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-[#25D366]/20 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950" />
                <span>Start Chat on WhatsApp Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {}
      {/* =====================================================================
          SECTION 5: SIMPLE FOOTER, FLOATING BUTTON & STICKY MOBILE BAR
      ===================================================================== */}
      <footer className="py-8 bg-[#0B1120] text-center text-xs text-slate-400 px-4">
        <div className="max-w-4xl mx-auto space-y-2">
          <div className="flex items-center justify-center gap-2 text-slate-200 font-semibold">
            <Lock className="w-3.5 h-3.5 text-[#25D366]" />
            <span>100% Identity Confidentiality Guaranteed • Private 1-on-1 WhatsApp Support</span>
          </div>
          <p className="text-[11px] text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Disclaimer: {BRAND_CONFIG.fullName} provides custom academic mentorship, reference model solutions, project code consultation, and formatting assistance for university students across India.
          </p>
          <p className="text-[11px] text-slate-600 pt-1">
            © {new Date().getFullYear()} {BRAND_CONFIG.fullName}. All rights reserved.
          </p>
        </div>
      </footer>

      {/* DESKTOP FLOATING WHATSAPP BUTTON (Bottom-Right) */}
      <a
        href={getWhatsAppUrl("Hi! I need help with an assignment/project.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-extrabold text-sm px-5 py-3.5 rounded-full shadow-2xl shadow-[#25D366]/40 hover:scale-105 transition-all"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-950"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-slate-950" />
        <span>Chat on WhatsApp</span>
      </a>

      {/* MOBILE STICKY FULL-WIDTH BOTTOM BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0F172A]/95 backdrop-blur-md border-t border-slate-800 px-3.5 py-2.5 shadow-2xl">
        <a
          href={getWhatsAppUrl("Hi! I have an urgent assignment/project deadline. Can you help?")}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-between bg-[#25D366] active:bg-[#20bd5a] text-slate-950 font-extrabold text-sm px-4 py-3 rounded-xl shadow-lg shadow-[#25D366]/25"
        >
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 fill-slate-950 shrink-0" />
            <span>Urgent Deadline? Chat on WhatsApp Now</span>
          </div>
          <ArrowRight className="w-4 h-4 stroke-[2.5] shrink-0" />
        </a>
      </div>

      {/* CLICK-TO-ZOOM LIGHTBOX MODAL FOR PROOFS */}
      {lightboxItem && (
        <div
          onClick={() => setLightboxItem(null)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl my-auto"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#25D366]" />
                <span className="text-xs sm:text-sm font-bold text-white">
                  {lightboxItem.type === "chat"
                    ? `${lightboxItem.data.collegeBadge} — ${lightboxItem.data.deliveryTag}`
                    : lightboxItem.data.title}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-3 sm:p-4 max-h-[78vh] overflow-y-auto">
              {lightboxItem.type === "chat" ? (
                lightboxItem.data.imageUrl ? (
                  <div className="flex flex-col items-center">
                    <img
                      src={lightboxItem.data.imageUrl}
                      alt={`${lightboxItem.data.contactName} Proof`}
                      className="max-h-[70vh] w-auto rounded-xl object-contain shadow-2xl border border-slate-800"
                    />
                    <div className="w-full mt-3 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 flex items-center justify-between text-xs text-slate-300">
                      <span className="text-[#25D366] font-bold">✓ {lightboxItem.data.deliveryTag}</span>
                      <span className="text-slate-400">{lightboxItem.data.collegeBadge}</span>
                    </div>
                  </div>
                ) : (
                  <div className="pointer-events-none">
                    <WhatsAppScreenCard proof={lightboxItem.data} onZoom={() => {}} />
                  </div>
                )
              ) : (
                <div className="space-y-4">
                  <div className="rounded-xl overflow-hidden border border-slate-800">
                    <DeliverableVisualPreview work={lightboxItem.data} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">
                      {lightboxItem.data.title}
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {lightboxItem.data.subtitle}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer CTA */}
            <div className="px-4 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                className="px-3.5 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
              >
                Close Preview
              </button>
              <a
                href={getWhatsAppUrl(
                  lightboxItem.type === "chat"
                    ? `Hi! I saw your ${lightboxItem.data.deliveryTag} proof (${lightboxItem.data.collegeBadge}) and need similar help.`
                    : lightboxItem.data.whatsappPrompt
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-extrabold text-xs sm:text-sm py-2.5 px-4 rounded-xl"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Need Similar Work? Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}