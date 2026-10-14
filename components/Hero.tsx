import { ArrowRight, CheckCheck, Clock, GraduationCap, ShieldCheck, Mic, Sparkles } from "lucide-react";
import { BRAND, ICEBREAKER, waLink } from "@/lib/config";
import { WhatsAppIcon } from "./WhatsAppIcon";

const CHAT = [
  { from: "student", text: "Bhai, regression analysis samajh nahi aa raha 😅 project me use karna hai", time: "9:12 PM" },
  { from: "us", text: "No worries! Aaj 10 baje 45-min session karte hain — tumhare dataset pe hi step-by-step karenge 👍", time: "9:13 PM" },
  { from: "student", text: "Perfect, link bhej do", time: "9:13 PM" },
  { from: "us", text: "Done ✅ Session ke baad mock viva bhi kar lenge", time: "9:14 PM" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-wa/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:pt-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-wa/30 bg-wa/10 px-3 py-1 text-xs font-medium text-wa">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wa opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-wa" />
            </span>
            {BRAND.status}
          </div>

          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Stop stressing. <br />
            <span className="text-gradient">Start understanding.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
            Live 1-on-1 tutoring, project mentoring and viva prep for BBA, MBA, BCA & B.Tech students.
            Learn from mentors who explain things until they actually make sense.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(ICEBREAKER)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-wa px-7 py-4 font-semibold text-ink shadow-[0_0_40px_-8px] shadow-wa/60 transition hover:brightness-110"
            >
              <WhatsAppIcon /> Book a free 15-min call
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-semibold text-white/90 transition hover:bg-white/5"
            >
              Explore services
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-white/60">
            <span className="flex items-center gap-2"><GraduationCap className="h-4 w-4 text-wa" /> 25k+ Students Guided</span>
            <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-wa" /> 40k+ Assignments Done</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-wa" /> 2-min WhatsApp Reply</span>
          </div>
        </div>

        {/* Phone mockup */}
        <div className="relative mx-auto w-full max-w-sm animate-float">
          <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-wa/30 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border-8 border-[#1c2321] bg-[#0b141a] shadow-2xl">
            <div className="flex items-center gap-3 bg-[#1f2c34] px-4 py-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-wa font-display font-bold text-ink">T</div>
              <div className="leading-tight">
                <p className="text-sm font-semibold">{BRAND.fullName}</p>
                <p className="text-xs text-wa">online</p>
              </div>
            </div>
            <div className="space-y-2 bg-[#0b141a] px-3 py-4">
              {CHAT.map((m, i) => (
                <div key={i} className={`flex ${m.from === "us" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 text-[13px] leading-snug ${
                      m.from === "us" ? "rounded-tr-none bg-[#005c4b]" : "rounded-tl-none bg-[#1f2c34]"
                    }`}
                  >
                    {m.text}
                    <span className="mt-1 flex items-center justify-end gap-1 text-[10px] text-white/50">
                      {m.time}
                      {m.from === "us" && <CheckCheck className="h-3 w-3 text-sky-400" />}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-5 -left-6 flex items-center gap-2 rounded-2xl border border-white/10 bg-panel/90 px-4 py-3 shadow-xl backdrop-blur">
            <Sparkles className="h-5 w-5 text-wa" />
            <div className="text-xs">
              <p className="font-semibold">Concept clicked!</p>
              <p className="text-white/50">After 1 session</p>
            </div>
          </div>
          <div className="absolute -right-4 top-20 hidden items-center gap-2 rounded-2xl border border-white/10 bg-panel/90 px-3 py-2 text-xs shadow-xl backdrop-blur sm:flex">
            <Mic className="h-4 w-4 text-wa" /> Mock viva booked
          </div>
        </div>
      </div>
    </section>
  );
}
