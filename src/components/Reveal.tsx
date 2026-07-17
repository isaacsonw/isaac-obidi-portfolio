"use client";

import { useEffect, useRef, useState, type ReactNode, type Ref } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger, in ms, applied as a transition delay. */
  delay?: number;
  className?: string;
  /** Semantic element to render. Defaults to a div. */
  as?: "div" | "header" | "section" | "li";
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver (or SSR-less env) — reveal on next tick without a sync setState.
    if (typeof IntersectionObserver === "undefined") {
      queueMicrotask(() => setShown(true));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // A single ref type covers every allowed tag.
      ref={ref as Ref<never>}
      data-shown={shown}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${className}`}
    >
      {children}
    </Tag>
  );
}
