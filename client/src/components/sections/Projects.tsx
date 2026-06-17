import ProjectVisual from "./ProjectVisuals";

const PROJECTS = [
  {
    id: "hush",
    title: "Hush",
    tagline: "Lower the volume on Spotify ads automatically.",
    description:
      "A lightweight macOS menu bar app that automatically reduces your system volume during Spotify ads and restores it when music resumes. Unlike muting, which Spotify detects and pauses playback, Hush lowers the volume just enough to keep ads out of your head.",
    status: "Live",
    link: "https://github.com/enflory/hush",
    visual: "volume",
    year: "2026",
    tags: ["macOS", "Swift", "Menu bar"],
  },
  {
    id: "ingolmo",
    title: "Ingolmo",
    tagline: "A living research base, built by AI agents.",
    description:
      "An AI-first knowledge repository where research is directed by a human but executed entirely by coding agents \u2014 investigating topics, synthesizing findings, and committing structured notes that accumulate durable context over time.",
    status: "Live",
    link: "https://github.com/enflory/ingolmo",
    visual: "knowledge",
    year: "2026",
    tags: ["AI", "Research", "Knowledge"],
  },
  {
    id: "legacy",
    title: "Project Legacy",
    tagline: "A publishing stack built around authors, not gatekeepers.",
    description:
      "AI-powered tools that help everyday writers craft memoirs with professional-grade editorial guidance. A new publishing stack built around authors, not gatekeepers.",
    status: "In Development",
    link: null,
    visual: "pages",
    year: "2026",
    tags: ["AI", "Publishing", "Memoir"],
  },
  {
    id: "career",
    title: "Career Interviewer",
    tagline: "A structured career reflection, guided by voice.",
    description:
      "A voice-powered AI interviewer that walks you through a structured career reflection, capturing your experience across six key areas and producing polished written summaries you can use for resumes, bios, or self-reflection.",
    status: "In Development",
    link: null,
    visual: "voice",
    year: "2026",
    tags: ["AI", "Voice", "Web"],
  },
  {
    id: "ranger",
    title: "Ranger",
    tagline: "Your personal headhunter, working nightly.",
    description:
      "A personal headhunter agent that monitors a curated watchlist for new roles and hunts trusted, personalized sources for companies worth knowing. Every match is scored against a learned model of your taste and delivered as a daily Telegram briefing that sharpens the more you react to it.",
    status: "Live · Personal",
    link: null,
    visual: "ranger",
    year: "2026",
    tags: ["AI", "Agent", "Telegram"],
  },
];

export default function Projects() {
  const accent = "#9c6b3a";

  return (
    <section id="projects" className="px-5 md:px-14" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      {/* About the lab — combined intro */}
      <div
        className="grid gap-4 md:gap-12 mb-0 pb-14 md:[grid-template-columns:180px_1fr]"
      >
        <div
          className="font-mono text-[10px] text-muted-foreground uppercase flex items-baseline gap-2.5 pt-2"
          style={{ letterSpacing: "0.18em" }}
        >
          <span
            className="inline-block relative"
            style={{
              width: 18,
              height: 1,
              background: accent,
              top: -3,
            }}
          />
          <span>About the lab</span>
        </div>
        <div style={{ maxWidth: 720 }}>
          <p
            className="font-serif text-[19px] leading-normal m-0"
            style={{ textWrap: "pretty" }}
          >
            Lonely Mountain Labs is an outpost experimenting with the small ways
            software can give people more space for what matters: preserving a
            life story, holding onto details that slip away, or just making
            something quietly delightful.
          </p>
        </div>
      </div>

      {/* Section divider */}
      <div
        className="flex justify-between font-mono text-[10px] text-muted-foreground uppercase mb-16 -mx-5 md:-mx-14 px-5 md:px-14"
        style={{
          borderTop: "1px solid #d4c9af",
          borderBottom: "1px solid #d4c9af",
          paddingTop: 12,
          paddingBottom: 12,
          letterSpacing: "0.18em",
        }}
      >
        <span>Field Notes &mdash; Volume I</span>
        <span className="text-accent">&diams;</span>
        <span>In the Lab</span>
      </div>

      {/* In the lab heading */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-4">
        <h2
          className="font-serif m-0"
          style={{
            fontWeight: 400,
            fontSize: "clamp(36px, 4.5vw, 56px)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          In the lab.
        </h2>
        <p
          className="font-serif text-[17px] italic m-0"
          style={{
            color: "#3a3a35",
            maxWidth: 360,
            textWrap: "pretty",
          }}
        >
          A running ledger of what&rsquo;s underway, what&rsquo;s shipped, and
          what we&rsquo;re still puzzling over.
        </p>
      </div>

      {/* Project cards — 2 col grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => (
          <article
            key={p.id}
            className="fn-card relative"
            style={{
              background: "#fcf9f0",
              border: "1px solid #d4c9af",
              padding: "28px 30px 26px",
              borderRadius: 2,
            }}
          >
            {/* Meta line */}
            <div
              className="flex justify-between items-baseline mb-4 font-mono text-[10px] text-muted-foreground uppercase"
              style={{ letterSpacing: "0.14em" }}
            >
              <span>
                <span className="text-accent">
                  N&deg; {String(i + 1).padStart(3, "0")}
                </span>{" "}
                &middot; {p.year}
              </span>
              <span
                style={{
                  color:
                    p.status.startsWith("Live")
                      ? accent
                      : p.status === "In Development"
                        ? "#9c6b3a"
                        : "#6b6856",
                }}
              >
                {p.status.startsWith("Live") ? "\u25CF " : "\u25CB "}
                {p.status}
              </span>
            </div>

            {/* Title */}
            <h3
              className="font-serif m-0 mb-1.5"
              style={{
                fontWeight: 500,
                fontSize: 30,
                lineHeight: 1.05,
                letterSpacing: "-0.015em",
              }}
            >
              {p.title}
            </h3>

            {/* Tagline */}
            <p
              className="font-serif italic text-[17px] m-0 mb-4"
              style={{ color: "#3a3a35" }}
            >
              {p.tagline}
            </p>

            {/* Description */}
            <p
              className="font-serif text-[15px] leading-relaxed m-0"
              style={{ color: "#3a3a35", textWrap: "pretty" }}
            >
              {p.description}
            </p>

            {/* Mini visual */}
            <div
              className="mt-5 overflow-hidden"
              style={{
                height: 80,
                background: "#f4efe4",
                border: "1px solid #d4c9af",
                borderRadius: 2,
              }}
            >
              <ProjectVisual kind={p.visual} />
            </div>

            {/* Bottom meta */}
            <div
              className="flex justify-between items-center mt-4 font-mono text-[10px] text-muted-foreground uppercase"
              style={{ letterSpacing: "0.1em" }}
            >
              <span>{p.tags.join(" \u00B7 ")}</span>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="fn-link font-serif italic normal-case text-sm"
                  style={{ letterSpacing: "normal" }}
                >
                  Visit &rarr;
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
