"use client";

import { useEffect, useRef } from "react";
import { principles } from "@/lib/content";

export default function Principles() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 768px)");
    let raf = 0;

    const update = () => {
      raf = 0;
      // On mobile or with reduced motion, let the track scroll natively.
      if (reduce.matches || !desktop.matches) {
        track.style.transform = "";
        return;
      }
      const scrollable = section.offsetHeight - window.innerHeight;
      if (scrollable <= 0) {
        track.style.transform = "";
        return;
      }
      const top = section.getBoundingClientRect().top;
      const progress = Math.min(Math.max(-top / scrollable, 0), 1);
      const distance = Math.max(track.scrollWidth - window.innerWidth, 0);
      track.style.transform = `translate3d(${-(progress * distance)}px, 0, 0)`;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    reduce.addEventListener("change", update);
    desktop.addEventListener("change", update);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      reduce.removeEventListener("change", update);
      desktop.removeEventListener("change", update);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="principles"
      ref={sectionRef}
      aria-labelledby="principles-heading"
      className="hscroll-section relative md:h-[300vh]"
    >
      <div className="hscroll-sticky md:sticky md:top-0 md:flex md:h-screen md:flex-col md:justify-center md:overflow-hidden">
        <div className="mx-auto w-full max-w-6xl px-6 pt-16 md:pt-0">
          <div className="hairline flex items-center justify-between pt-6 font-mono text-xs uppercase tracking-[0.2em] text-faint">
            <span>
              <span className="text-accent">02</span> — Principles
            </span>
            <span className="hidden items-center gap-2 md:inline-flex">
              Scroll <span aria-hidden="true" className="text-accent">→</span>
            </span>
          </div>
          <h2
            id="principles-heading"
            className="mt-7 font-serif text-3xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-5xl"
          >
            How I think about the work
          </h2>
        </div>

        <div className="hscroll-viewport no-scrollbar mt-10 snap-x snap-mandatory overflow-x-auto md:mt-12 md:snap-none md:overflow-x-hidden">
          <div
            ref={trackRef}
            className="hscroll-track flex gap-6 px-6 will-change-transform md:gap-10 md:pl-[max(1.5rem,calc((100vw-72rem)/2))]"
          >
            {principles.map((principle, i) => (
              <article
                key={principle.title}
                className="flex min-h-[16rem] w-[80vw] shrink-0 snap-start flex-col justify-between rounded-2xl border border-border-strong bg-surface p-7 sm:w-[24rem] sm:p-9 md:w-[27rem]"
              >
                <span className="font-mono text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mt-8">
                  <h3 className="font-serif text-2xl font-medium leading-tight tracking-tight text-foreground sm:text-[2rem]">
                    {principle.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted">{principle.body}</p>
                </div>
              </article>
            ))}
            {/* Trailing spacer so the last card can settle away from the edge. */}
            <div aria-hidden="true" className="w-1 shrink-0 md:w-[16vw]" />
          </div>
        </div>
      </div>
    </section>
  );
}
