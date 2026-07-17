import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id?: string;
  index?: string;
  label?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  index,
  label,
  title,
  intro,
  children,
  className = "",
}: SectionProps) {
  const headingId = id ? `${id}-heading` : undefined;
  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      className={`mx-auto w-full max-w-6xl px-6 py-20 sm:py-28 ${className}`}
    >
      {(label || title) && (
        <Reveal as="header" className="hairline block pt-6">
          {(index || label) && (
            <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-faint">
              {index && <span className="text-accent">{index}</span>}
              {label && <span>{label}</span>}
            </div>
          )}
          {title && (
            <h2
              id={headingId}
              className="font-serif text-3xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-5xl"
            >
              {title}
            </h2>
          )}
          {intro && (
            <div className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              {intro}
            </div>
          )}
        </Reveal>
      )}
      {children}
    </section>
  );
}
