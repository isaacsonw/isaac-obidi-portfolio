import { aiWorkflow } from "@/lib/content";
import Section from "./Section";
import Reveal from "./Reveal";

// Returns the youtube.com/embed URL for a watch, youtu.be, or embed link — else null.
function getYouTubeEmbed(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/,
  );
  return match ? `https://www.youtube-nocookie.com/embed/${match[1]}` : null;
}

function VideoBlock() {
  if (aiWorkflow.videoSrc) {
    const embed = getYouTubeEmbed(aiWorkflow.videoSrc);

    if (embed) {
      return (
        <div className="aspect-video w-full overflow-hidden rounded-lg border border-border-strong bg-black">
          <iframe
            src={embed}
            title="How I work with AI — building this portfolio in Cursor"
            className="h-full w-full"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      );
    }

    return (
      <div className="overflow-hidden rounded-lg border border-border-strong bg-black">
        <video
          controls
          preload="metadata"
          poster={aiWorkflow.videoPoster || undefined}
          className="aspect-video w-full"
        >
          <source src={aiWorkflow.videoSrc} />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center rounded-lg border border-dashed border-border-strong bg-surface text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-border-strong bg-background text-accent">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
      <p className="mt-4 font-serif text-lg text-foreground">Demo video goes here</p>
      <p className="mt-1 max-w-md px-6 text-sm text-faint">
        A 5–8 min screen recording of this site being built in Cursor — rules
        firing, PII masking, tests written, an atomic diff, and a subagent / MCP call.
      </p>
    </div>
  );
}

export default function HowIWorkWithAI() {
  return (
    <Section
      id="process"
      index="03"
      label="How I work with AI"
      title={
        <>
          AI agents, run like a{" "}
          <em className="font-serif italic text-accent">governed team</em>.
        </>
      }
      intro={aiWorkflow.narrative}
    >
      <div className="mt-14 grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-16">
        <Reveal>
          <VideoBlock />
        </Reveal>

        <ol className="flex flex-col justify-center gap-8">
          {aiWorkflow.points.map((point, i) => (
            <li key={point.title}>
              <Reveal delay={i * 120} className="flex gap-5">
                <span className="font-mono text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-lg font-medium tracking-tight text-foreground">
                    {point.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{point.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
