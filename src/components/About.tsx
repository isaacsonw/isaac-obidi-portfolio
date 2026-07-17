import { skills } from "@/lib/content";
import Section from "./Section";
import Reveal from "./Reveal";

export default function About() {
  return (
    <Section id="about" index="04" label="About" title="Staff-level rigor, end to end">
      <div className="mt-14 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          <p className="font-serif text-2xl font-normal leading-snug text-foreground">
            I own product surfaces end to end — architecture, implementation, and
            design tokens — and I care most about the unglamorous parts.
          </p>
          <p>
            At <span className="text-foreground">Dojah</span> I lead a team of six
            frontend engineers on a KYC/identity platform reaching millions of people
            across Nigeria, Kenya, Ghana, and South Africa. I&apos;m the web team&apos;s
            liaison to product, design, and backend, and I partner with DevOps on a
            pipeline that ships hotfixes to production in minutes.
          </p>
          <p>
            Atomic diffs, PII-safe code, test-first coverage, roadmap-aware decisions.
            I mentor deliberately — 70% of the engineers I&apos;ve led have moved from
            junior to mid. Earlier, I built payments at SeerBit, loyalty at The North
            Face (via VF Corporation), and crypto acquisition surfaces at Anchor.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-faint">
            Toolkit
          </h3>
          <dl className="divide-y divide-border">
            {skills.map((group) => (
              <div key={group.label} className="grid grid-cols-[7rem_1fr] gap-4 py-3">
                <dt className="font-mono text-xs uppercase tracking-wider text-accent">
                  {group.label}
                </dt>
                <dd className="text-sm leading-relaxed text-foreground/85">
                  {group.items.join(", ")}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
