const items = [
  "Fintech",
  "Identity & KYC",
  "Payments",
  "Design systems",
  "Performance",
  "Micro-frontends",
  "React / Next.js",
  "Accessibility",
  "AI-assisted delivery",
];

export default function Marquee() {
  // Duplicated so the -50% translate loops seamlessly.
  const track = [...items, ...items];

  return (
    <section
      aria-hidden="true"
      className="marquee-track overflow-hidden border-y border-border-strong bg-surface/50"
    >
      <div className="flex w-max animate-marquee whitespace-nowrap py-4">
        {track.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-serif text-lg italic tracking-tight text-foreground/75">
              {item}
            </span>
            <span className="px-8 text-accent" aria-hidden="true">
              ✳
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
