import Image from "next/image";
import { projects, type Project } from "@/lib/content";
import Section from "./Section";
import Reveal from "./Reveal";

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  const flip = index % 2 === 1;

  return (
    <article className='hairline grid grid-cols-1 gap-8 pt-10 md:grid-cols-12 md:gap-10'>
      {/* Imagery */}
      <div className={`md:col-span-7 ${flip ? "md:order-2" : "md:order-1"}`}>
        <a
          href={project.url}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={`Visit ${project.name} — opens in a new tab`}
          className='group block overflow-hidden rounded-lg border border-border-strong bg-surface'>
          <div className='relative aspect-16/11 w-full overflow-hidden'>
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes='(min-width: 768px) 58vw, 100vw'
              className='object-cover object-top grayscale brightness-90 transition duration-500 ease-out group-hover:scale-[1.03] group-hover:grayscale-0 group-hover:brightness-100'
            />
          </div>
        </a>
      </div>

      {/* Copy */}
      <div className={`md:col-span-5 ${flip ? "md:order-1" : "md:order-2"}`}>
        <div className='flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-faint'>
          <span className='text-accent'>{num}</span>
          <span>{project.kind}</span>
        </div>

        <h3 className='mt-4 font-serif text-2xl font-medium leading-tight tracking-tight text-foreground sm:text-3xl'>
          {project.name}
        </h3>

        <p className='mt-2 font-mono text-xs uppercase tracking-[0.14em] text-muted'>
          {project.role} · {project.region} · {project.years}
        </p>

        <p className='mt-4 text-pretty leading-relaxed text-muted'>
          {project.summary}
        </p>

        <ul className='mt-5 space-y-2'>
          {project.highlights.map((h) => (
            <li
              key={h}
              className='flex gap-3 text-sm leading-relaxed text-foreground/85'>
              <span
                aria-hidden='true'
                className='mt-[0.55rem] h-px w-4 flex-none bg-accent'
              />
              {h}
            </li>
          ))}
        </ul>

        <div className='mt-5 flex flex-wrap items-center gap-x-4 gap-y-2'>
          <ul className='flex flex-wrap gap-2' aria-label='Stack'>
            {project.stack.map((s) => (
              <li
                key={s}
                className='rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-faint'>
                {s}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={project.url}
          target='_blank'
          rel='noopener noreferrer'
          className='group mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-foreground'>
          <span className='border-b border-accent pb-0.5 transition-colors group-hover:text-accent'>
            {project.urlLabel}
          </span>
          <span className='sr-only'> (opens in a new tab)</span>
          <span
            aria-hidden='true'
            className='text-accent transition-transform group-hover:translate-x-0.5'>
            ↗
          </span>
        </a>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <Section
      id='work'
      index='01'
      label={`Selected work · ${projects.length} projects`}
      title={
        <>
          Edging towards a decade of shipping frontends across{" "}
          <em className='font-serif italic text-accent'>two markets</em>.
        </>
      }
      intro='Fintech, identity, payments, fraud, Anti-Money Laundering, and retail — for teams in Nigeria and remote-first companies in the US.'>
      <div className='mt-14 space-y-16 sm:space-y-20'>
        {projects.map((project, i) => (
          <Reveal key={project.id}>
            <ProjectRow project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
