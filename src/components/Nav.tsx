import { navLinks, profile } from "@/lib/content";
import ThemeToggle from "./ThemeToggle";
import MobileNav from "./MobileNav";

export default function Nav() {
  return (
    <header className='sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md'>
      <nav
        aria-label='Primary'
        className='mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6'>
        <a href='#top' className='group flex items-baseline gap-2'>
          <span className='font-serif text-lg font-medium tracking-tight text-foreground'>
            Isaac Obidi
          </span>
          <span className='hidden font-mono text-[11px] uppercase tracking-[0.2em] text-faint sm:inline'>
            {profile.role}
          </span>
        </a>

        <div className='flex items-center gap-3'>
          <ul className='mr-1 hidden items-center gap-5 md:flex'>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className='font-mono text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent'>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.resumeUrl}
            className='hidden rounded-full border border-border-strong px-3 py-1.5 font-mono text-xs uppercase tracking-[0.15em] text-foreground transition-colors hover:border-accent hover:text-accent sm:inline-block'>
            Résumé
          </a>
          <ThemeToggle />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
