import { profile } from "@/lib/content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32"
    >
      <Reveal className="hairline block pt-10">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-faint">
          <span className="text-accent">05</span>
          <span>Contact</span>
        </div>

        <h2
          id="contact-heading"
          className="mt-8 max-w-4xl font-serif text-4xl font-normal leading-[1.05] tracking-tight text-foreground sm:text-6xl"
        >
          Let&apos;s build something{" "}
          <em className="italic text-accent">fast, safe, and measurable</em>.
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {profile.availability} in fintech, identity, and payments. The fastest way
          to reach me is email.
        </p>

        <div className="mt-10 flex flex-col gap-6 border-t border-border-strong pt-8 sm:flex-row sm:items-end sm:justify-between">
          <a
            href={`mailto:${profile.email}`}
            className="group font-serif text-2xl font-normal tracking-tight text-foreground sm:text-4xl"
          >
            <span className="border-b border-accent/50 pb-1 transition-colors group-hover:border-accent group-hover:text-accent">
              {profile.email}
            </span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-muted transition-colors hover:text-accent"
          >
            {profile.linkedinLabel}
            <span className="sr-only"> (opens in a new tab)</span>
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
              ↗
            </span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
