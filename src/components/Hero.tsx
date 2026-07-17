import Image from "next/image";
import { profile } from "@/lib/content";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto w-full max-w-6xl px-6 pb-16 pt-20 sm:pb-24 sm:pt-28"
    >
      <div className="animate-rise">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-[0.2em] text-faint">
          <span className="inline-flex items-center gap-2 text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {profile.availability}
          </span>
          <span aria-hidden="true">/</span>
          <span>{profile.location}</span>
          <span aria-hidden="true">/</span>
          <span>{profile.focus}</span>
        </div>

        <div className="mt-8 grid items-center gap-10 md:grid-cols-[1.5fr_1fr] md:gap-14">
          {/* Left: statement + actions */}
          <div>
            <h1
              id="hero-heading"
              className="font-serif text-[2.5rem] font-normal leading-[1.03] tracking-[-0.02em] text-foreground sm:text-6xl"
            >
              I&apos;ve engineered frontends for products that move{" "}
              <em className="italic text-accent">money</em>, verify{" "}
              <em className="italic text-accent">identity</em> and catch{" "}
              <em className="italic text-accent">fraud</em>.
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted">
              {profile.standfirst}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4">
              <a
                href={profile.resumeUrl}
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-background transition-transform hover:-translate-y-0.5"
              >
                Résumé
                <span aria-hidden="true" className="transition-transform group-hover:translate-y-0.5">
                  ↓
                </span>
              </a>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-foreground"
              >
                <span className="border-b border-accent pb-0.5 transition-colors group-hover:text-accent">
                  Selected work
                </span>
                <span aria-hidden="true" className="text-accent">↓</span>
              </a>
            </div>

            <a
              href={`mailto:${profile.email}`}
              className="mt-5 inline-block font-mono text-sm text-faint transition-colors hover:text-accent"
            >
              {profile.email}
            </a>
          </div>

          {/* Right: portrait with an offset editorial frame */}
          <div className="relative mx-auto w-full max-w-xs md:mx-0 md:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-2xl border border-accent/30"
            />
            <div className="relative overflow-hidden rounded-xl border border-border-strong bg-surface shadow-sm">
              <div className="relative aspect-square w-full">
                <Image
                  src={profile.portrait}
                  alt={profile.portraitAlt}
                  fill
                  priority
                  sizes="(min-width: 768px) 34vw, 20rem"
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between border-t border-border-strong px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.15em] text-faint">
                <span>{profile.name}</span>
                <span className="text-accent">Lagos, NG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
