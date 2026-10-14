"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BRAND, ICEBREAKER, waLink } from "@/lib/config";
import { WhatsAppIcon } from "./WhatsAppIcon";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink/75 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="font-display text-xl font-extrabold tracking-tight">
          {BRAND.name}
          <span className="text-wa">{BRAND.accent}</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/70 transition hover:text-white">
              {l.label}
            </a>
          ))}
          <a
            href={waLink(ICEBREAKER)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-wa px-4 py-2 text-sm font-semibold text-ink transition hover:brightness-110"
          >
            <WhatsAppIcon className="h-4 w-4" /> Chat now
          </a>
        </div>

        <button
          className="rounded-lg p-2 text-white/80 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 px-4 pb-4 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-white/80 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink(ICEBREAKER)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-wa py-3 font-semibold text-ink"
          >
            <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
