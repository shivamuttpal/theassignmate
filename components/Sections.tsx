import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  Code2,
  FileCheck2,
  Mic,
  Quote,
  Users,
} from "lucide-react";
import {
  AMITY_SUBJECTS,
  BRAND,
  FAQS,
  ICEBREAKER,
  PRICING,
  SERVICES,
  STEPS,
  TESTIMONIALS,
  waLink,
  type ServiceIcon,
} from "@/lib/config";
import { WhatsAppIcon } from "./WhatsAppIcon";

const ICONS: Record<ServiceIcon, typeof BookOpen> = {
  tutor: Users,
  project: BookOpen,
  viva: Mic,
  code: Code2,
  edit: FileCheck2,
};

function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-wa">{eyebrow}</p>
      <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-4 text-white/60">{sub}</p>
    </div>
  );
}

export function Stats() {
  const items = [
    { value: "40k+", label: "Assignments & Projects Done" },
    { value: "25k+", label: "Happy Students Guided" },
    { value: "2 min", label: "Avg WhatsApp Reply" },
    { value: "100%", label: "Turnitin Safe & Private" },
  ];
  return (
    <section className="border-y border-white/5 bg-panel/50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-10 sm:px-6 md:grid-cols-4">
        {items.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-3xl font-extrabold text-white">{s.value}</p>
            <p className="mt-1 text-sm text-white/50">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="What we do"
        title="Help that makes you better — not dependent"
        sub="Every service is built around one goal: you understand your work well enough to explain it to anyone."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => {
          const Icon = ICONS[s.icon];
          return (
            <article
              key={s.title}
              className="group relative flex flex-col rounded-3xl border border-white/8 bg-panel p-7 transition hover:-translate-y-1 hover:border-wa/40 hover:shadow-[0_20px_60px_-20px] hover:shadow-wa/30"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-wa/10 text-wa">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/60">{s.tag}</span>
              </div>
              <h3 className="font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{s.desc}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-white/75">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-wa" /> {p}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(s.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-wa"
              >
                Ask about this <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </article>
          );
        })}

        <article className="flex flex-col justify-center rounded-3xl border border-dashed border-wa/30 bg-gradient-to-br from-wa/10 to-transparent p-7">
          <h3 className="font-display text-xl font-bold">Not sure what you need?</h3>
          <p className="mt-3 text-sm text-white/60">
            Tell us about your course and deadline — we&apos;ll suggest the right kind of help, free.
          </p>
          <a
            href={waLink("Hi TheAssignmate! I'm not sure what kind of help I need — can you suggest?")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-wa px-5 py-3 text-sm font-semibold text-ink"
          >
            <WhatsAppIcon className="h-4 w-4" /> Get a recommendation
          </a>
        </article>
      </div>
    </section>
  );
}

export function AmitySection() {
  return (
    <section id="amity" className="mx-auto max-w-6xl scroll-mt-20 px-4 pb-24 sm:px-6">
      <div className="grid items-center gap-10 rounded-[2.5rem] border border-white/8 bg-panel p-8 sm:p-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-wa">For Amity Online students</p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Studying online? You don&apos;t have to figure it out alone.
          </h2>
          <p className="mt-4 leading-relaxed text-white/60">
            Our mentors know the Amity Online BBA, MBA and BCA syllabus. Get concepts explained, feedback on your own
            drafts and mock vivas before the real one — around your work schedule.
          </p>
          <a
            href={waLink(ICEBREAKER)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-wa px-6 py-3 font-semibold text-ink transition hover:brightness-110"
          >
            <WhatsAppIcon className="h-5 w-5" /> I&apos;m an Amity Online student
          </a>
        </div>
        <ul className="flex flex-wrap gap-3">
          {AMITY_SUBJECTS.map((s) => (
            <li
              key={s}
              className="rounded-full border border-white/10 bg-ink px-4 py-2 text-sm text-white/80 transition hover:border-wa/40 hover:text-white"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 border-y border-white/5 bg-panel/40">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionHeading
          eyebrow="How it works"
          title="From stuck to confident in 4 steps"
          sub="No forms, no waiting. Everything starts with a WhatsApp message."
        />
        <ol className="grid gap-6 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative rounded-3xl border border-white/8 bg-ink p-6">
              <span className="font-display text-5xl font-extrabold text-wa/20">0{i + 1}</span>
              <h3 className="mt-2 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Pricing"
        title="Simple, student-friendly pricing"
        sub="Pay per session or save with a package. Your first session is refundable if it doesn't help."
      />
      <div className="grid items-stretch gap-6 md:grid-cols-3">
        {PRICING.map((p) => (
          <div
            key={p.name}
            className={`relative flex flex-col rounded-3xl p-8 ${
              p.highlight
                ? "border-2 border-wa bg-gradient-to-b from-wa/15 to-panel shadow-[0_30px_80px_-30px] shadow-wa/50"
                : "border border-white/8 bg-panel"
            }`}
          >
            {p.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-wa px-3 py-1 text-xs font-bold text-ink">
                Best value
              </span>
            )}
            <h3 className="font-display text-lg font-bold">{p.name}</h3>
            <p className="mt-1 text-sm text-white/55">{p.desc}</p>
            <p className="mt-6">
              <span className="font-display text-4xl font-extrabold">{p.price}</span>
              <span className="text-white/50"> {p.unit}</span>
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-white/75">
                  <Check className="h-4 w-4 text-wa" /> {f}
                </li>
              ))}
            </ul>
            <a
              href={waLink(`Hi TheAssignmate! I'm interested in the ${p.name} plan (${p.price} ${p.unit}).`)}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-auto block rounded-full py-3 text-center text-sm font-semibold transition ${
                p.highlight ? "mt-8 bg-wa text-ink hover:brightness-110" : "mt-8 border border-white/15 hover:bg-white/5"
              }`}
            >
              Choose {p.name}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;
  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
      <SectionHeading eyebrow="Students say" title="Real words from real learners" sub="Shared with permission." />
      <div className="grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="rounded-3xl border border-white/8 bg-panel p-7">
            <Quote className="h-6 w-6 text-wa" />
            <blockquote className="mt-4 text-white/80">{t.quote}</blockquote>
            <figcaption className="mt-5 text-sm">
              <span className="font-semibold">{t.name}</span>
              <span className="text-white/50"> · {t.course}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20 border-t border-white/5 bg-panel/40">
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" sub="Anything else? Just ask on WhatsApp." />
        <div className="space-y-3">
          {FAQS.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-white/8 bg-ink px-6 py-5 open:border-wa/30">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold">
                {f.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-white/50 transition group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-wa to-wa-dark px-8 py-16 text-center text-ink sm:px-16">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
        <h2 className="relative font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
          Your next &ldquo;aha!&rdquo; is one message away.
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-ink/75">
          Tell us your subject and deadline. We&apos;ll match you with a mentor in minutes.
        </p>
        <a
          href={waLink(ICEBREAKER)}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 font-semibold text-white transition hover:scale-105"
        >
          <WhatsAppIcon /> Start on WhatsApp
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 text-sm text-white/50 sm:flex-row sm:px-6">
        <p className="font-display text-lg font-extrabold text-white">
          {BRAND.name}
          <span className="text-wa">{BRAND.accent}</span>
        </p>
        <p className="text-center">
          We tutor and mentor — students do and submit their own work.
        </p>
        <p>
          © {new Date().getFullYear()} {BRAND.fullName} ·{" "}
          <a href={`mailto:${BRAND.email}`} className="hover:text-white">
            {BRAND.email}
          </a>
        </p>
      </div>
    </footer>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={waLink(ICEBREAKER)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-wa text-ink shadow-lg shadow-wa/40 transition hover:scale-110"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
