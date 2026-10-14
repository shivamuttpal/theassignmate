"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { PROOFS } from "@/lib/config";

export function ProofCarousel() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const scrollTo = useCallback((i: number) => {
    const el = track.current?.children[i] as HTMLElement | undefined;
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, []);

  // Track which slide is centred
  useEffect(() => {
    const root = track.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      { root, threshold: 0.6 }
    );
    Array.from(root.children).forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  // Lightbox keyboard controls
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i! + 1) % PROOFS.length);
      if (e.key === "ArrowLeft") setLightbox((i) => (i! - 1 + PROOFS.length) % PROOFS.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  if (PROOFS.length === 0) return null;

  const go = (dir: 1 | -1) => scrollTo((active + dir + PROOFS.length) % PROOFS.length);

  return (
    <section id="proof" className="scroll-mt-20 overflow-hidden py-24">
      <div className="mx-auto mb-12 max-w-2xl px-4 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-wa">Student wins</p>
        <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Learning that shows</h2>
        <p className="mt-4 text-white/60">Shared with permission — names and personal details blurred.</p>
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div
          ref={track}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-[calc(50%-140px)] pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {PROOFS.map((p, i) => (
            <figure
              key={p.src}
              data-index={i}
              className={`w-[280px] shrink-0 snap-center transition duration-500 ${
                i === active ? "scale-100 opacity-100" : "scale-90 opacity-50"
              }`}
            >
              <button
                onClick={() => setLightbox(i)}
                className="group relative block aspect-[9/19] w-full overflow-hidden rounded-[2rem] border-[6px] border-[#1c2321] bg-panel shadow-2xl shadow-black/60"
                aria-label={`Enlarge: ${p.caption}`}
              >
                <Image src={p.src} alt={p.alt} fill sizes="280px" className="object-cover object-top" />
                <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/40 group-hover:opacity-100">
                  <ZoomIn className="h-8 w-8" />
                </span>
              </button>
              <figcaption className="mt-4 text-center text-sm text-white/70">{p.caption}</figcaption>
            </figure>
          ))}
        </div>

        {PROOFS.length > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              aria-label="Previous"
              className="absolute left-4 top-[40%] hidden h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-panel/80 backdrop-blur transition hover:border-wa/50 sm:flex"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next"
              className="absolute right-4 top-[40%] hidden h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-panel/80 backdrop-blur transition hover:border-wa/50 sm:flex"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="mt-4 flex justify-center gap-2">
              {PROOFS.map((p, i) => (
                <button
                  key={p.src}
                  onClick={() => scrollTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${i === active ? "w-8 bg-wa" : "w-2 bg-white/25"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button className="absolute right-5 top-5 rounded-full bg-white/10 p-2" aria-label="Close">
            <X className="h-6 w-6" />
          </button>
          <div className="relative h-[85vh] w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <Image src={PROOFS[lightbox].src} alt={PROOFS[lightbox].alt} fill sizes="448px" className="object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}
