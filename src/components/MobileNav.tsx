"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks, profile } from "@/lib/content";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const trigger = buttonRef.current;
    const getFocusable = () =>
      panel
        ? Array.from(
            panel.querySelectorAll<HTMLElement>(
              'a[href], button:not([disabled])',
            ),
          )
        : [];

    // Move focus into the dialog when it opens.
    getFocusable()[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab") return;

      // Trap focus within the dialog.
      const focusable = getFocusable();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      // Restore focus to the trigger when the dialog closes.
      trigger?.focus();
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-haspopup="dialog"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-strong text-foreground transition-colors hover:border-accent hover:text-accent"
      >
        <span aria-hidden="true" className="text-base leading-none">
          {open ? "✕" : "☰"}
        </span>
      </button>

      {open && (
        <div
          id="mobile-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 flex flex-col bg-background/98 backdrop-blur-md"
        >
          <div className="flex h-16 items-center justify-between px-6">
            <span className="font-serif text-lg font-medium tracking-tight text-foreground">
              Menu
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-strong text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <span aria-hidden="true" className="text-base leading-none">
                ✕
              </span>
            </button>
          </div>

          <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center gap-2 px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 font-serif text-3xl font-medium tracking-tight text-foreground transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-background"
            >
              Résumé
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
