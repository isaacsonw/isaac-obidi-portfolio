"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-background transition-transform hover:-translate-y-0.5"
    >
      Download PDF
      <span aria-hidden="true">↓</span>
    </button>
  );
}
