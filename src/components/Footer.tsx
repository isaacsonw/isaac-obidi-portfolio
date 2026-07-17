import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-2 px-6 py-8 font-mono text-xs uppercase tracking-[0.15em] text-faint sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {profile.fullName}
        </p>
        <p>Built in Cursor · Next.js &amp; Tailwind</p>
      </div>
    </footer>
  );
}
