import type { Metadata } from "next";
import Link from "next/link";
import { profile, projects, skills } from "@/lib/content";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Résumé",
  description: `Résumé — ${profile.fullName}, ${profile.role}.`
};

const education = {
  degree: "BSc, Computer Science",
  school: "National Open University of Nigeria",
  years: "2013 — 2017"
};

export default function ResumePage() {
  return (
    <main id='main' className='mx-auto max-w-3xl px-6 py-10 print:py-0'>
      <div className='mb-10 flex items-center justify-between print:hidden'>
        <Link
          href='/'
          className='font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent'>
          ← Back to site
        </Link>
        <PrintButton />
      </div>

      <header className='border-b border-border-strong pb-6'>
        <h1 className='font-serif text-4xl font-medium tracking-tight text-foreground'>
          {profile.fullName}
        </h1>
        <p className='mt-1 text-lg text-muted'>
          {profile.role} · {profile.focus}
        </p>
        <p className='mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-faint'>
          <span>{profile.location}</span>
          <a href={`mailto:${profile.email}`} className='hover:text-accent'>
            {profile.email}
          </a>
          <a href={profile.linkedin} className='hover:text-accent'>
            {profile.linkedinLabel}
          </a>
        </p>
      </header>

      <section className='mt-8'>
        <h2 className='font-mono text-xs uppercase tracking-[0.2em] text-accent'>
          Profile
        </h2>
        <p className='mt-3 leading-relaxed text-muted'>{profile.standfirst}</p>
      </section>

      <section className='mt-8'>
        <h2 className='font-mono text-xs uppercase tracking-[0.2em] text-accent'>
          Experience
        </h2>
        <div className='mt-4 space-y-6'>
          {projects.map((project) => (
            <article key={project.id} className='break-inside-avoid'>
              <div className='flex flex-wrap items-baseline justify-between gap-x-4'>
                <h3 className='font-serif text-xl font-medium tracking-tight text-foreground'>
                  {project.role}
                  <span className='text-faint'> · </span>
                  <span className='text-accent'>
                    {project.org ?? project.name}
                  </span>
                </h3>
                <span className='font-mono text-xs text-faint'>
                  {project.years}
                </span>
              </div>
              <p className='mt-0.5 font-mono text-xs uppercase tracking-wider text-faint'>
                {project.kind} · {project.region}
              </p>
              <ul className='mt-2 space-y-1.5'>
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className='flex gap-2.5 text-sm leading-relaxed text-muted'>
                    <span
                      aria-hidden='true'
                      className='mt-2 h-px w-3 flex-none bg-accent'
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <div className='mt-8 grid gap-8 sm:grid-cols-2'>
        <section className='break-inside-avoid'>
          <h2 className='font-mono text-xs uppercase tracking-[0.2em] text-accent'>
            Skills
          </h2>
          <dl className='mt-4 space-y-2'>
            {skills.map((group) => (
              <div key={group.label}>
                <dt className='font-mono text-[11px] uppercase tracking-wider text-faint'>
                  {group.label}
                </dt>
                <dd className='text-sm text-foreground/85'>
                  {group.items.join(", ")}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className='break-inside-avoid'>
          <h2 className='font-mono text-xs uppercase tracking-[0.2em] text-accent'>
            Education
          </h2>
          <div className='mt-4'>
            <p className='font-serif text-lg font-medium tracking-tight text-foreground'>
              {education.degree}
            </p>
            <p className='text-sm text-muted'>{education.school}</p>
            <p className='font-mono text-xs text-faint'>{education.years}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
