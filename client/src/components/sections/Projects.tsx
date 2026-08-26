import ProjectVisual from "./ProjectVisuals";

type Link = { label: string; href: string };

type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  status: string;
  links: Link[];
  visual: string;
  year: string;
  tags: string[];
};

// Tier 1 — the work that carries the thesis. Given full width and real space.
const FEATURED: Project[] = [
  {
    id: "pinecone",
    title: "Pinecone",
    tagline: "An agent that reads the codebase, not just the database.",
    description:
      "Stio's internal AI agent, living in Slack on Anthropic's Managed Agents. It queries our Snowflake warehouse, but the useful part is that it also reads the repositories where the business logic actually lives: the dbt models, our company Claude skills, and its own source. So it can explain why a number means what it means instead of just handing the number back. When it gets something wrong it opens a pull request against itself, and before proposing a change it checks whether I already turned that idea down.",
    status: "Live · Internal",
    links: [],
    visual: "agent",
    year: "2026",
    tags: ["Managed Agents", "Slack", "Snowflake", "dbt"],
  },
  {
    id: "susy",
    title: "Susy Flory & Shake Ridge Press",
    tagline: "Everything an author's business actually needs.",
    description:
      "My mother is a NYT-bestselling author, memoir expert, and the founder and publisher at Shake Ridge Press. It started with rebuilding susyflory.com off a decade-old template, then building shakeridgepress.com from scratch for her press. The current question is a bigger one: what software does the business itself need, and how does technology help people better tell their own stories? That part is still being scoped, which is the honest status. The reason this keeps going is that each thing worked well enough to earn the next one.",
    status: "Live · Ongoing",
    links: [
      { label: "susyflory.com", href: "https://susyflory.com" },
      { label: "shakeridgepress.com", href: "https://shakeridgepress.com" },
    ],
    visual: "pages",
    year: "2025–26",
    tags: ["Client work"],
  },
  {
    id: "naur",
    title: "naur",
    tagline: "The cells finally got good enough. The canister can go.",
    description:
      "One device that boils water for dinner in the backcountry and charges the phone, so the stove and the power bank stop being two things to carry, and fossil fuels stay out of the pack. Step one was the unglamorous question: does the physics work, and does the cost? Several weeks of modeling say a qualified yes, and turned up one finding that reorganized the entire design. Prototype is specified and next. The name? Sindarin for fire.",
    status: "Research",
    links: [],
    visual: "heat",
    year: "2026",
    tags: ["Hardware", "Batteries", "Techno-economics"],
  },
];

// Tier 2 — the ledger. Volume is the point; these two are the ones worth clicking.
const SHIPPED: Project[] = [
  {
    id: "lotr",
    title: "The Lord of the Rings RPG",
    tagline: "A pixel-art walk from Bag End into the wide world.",
    description:
      "A top-down retelling of The Fellowship of the Ring in Phaser 3, where every sprite, tile, and sound is procedurally generated. No external art or audio. A non-commercial fan project; Chapter One runs from Bag End to the Brandywine crossing.",
    status: "Live",
    links: [
      { label: "Play", href: "https://lotr.lonelymtnlabs.com" },
      { label: "Code", href: "https://github.com/enflory/lotr-rpg" },
    ],
    visual: "lotr",
    year: "2026",
    tags: ["Phaser 3", "Pixel art", "Game"],
  },
  {
    id: "hush",
    title: "Hush",
    tagline: "Lower the volume on Spotify ads automatically.",
    description:
      "A macOS menu bar app that ducks system volume during Spotify ads and restores it when the music returns. It lowers rather than mutes, because Spotify detects muting and pauses playback.",
    status: "Live",
    links: [{ label: "Code", href: "https://github.com/enflory/hush" }],
    visual: "volume",
    year: "2026",
    tags: ["macOS", "Swift", "Menu bar"],
  },
];

const accent = "#9c6b3a";

function statusColor(status: string) {
  if (status.startsWith("Live")) return accent;
  if (status === "Research") return "#6b6856";
  return "#6b6856";
}

function Card({
  project,
  index,
  compact = false,
}: {
  project: Project;
  index: number;
  compact?: boolean;
}) {
  const p = project;
  return (
    <article
      className="fn-card relative flex flex-col"
      style={{
        background: "#fcf9f0",
        border: "1px solid #d4c9af",
        padding: compact ? "24px 26px 22px" : "30px 34px 28px",
        borderRadius: 2,
      }}
    >
      {/* Meta line */}
      <div
        className="flex justify-between items-baseline mb-4 font-mono text-[10px] text-muted-foreground uppercase"
        style={{ letterSpacing: "0.14em" }}
      >
        <span>
          <span className="text-accent">N&deg; {String(index).padStart(3, "0")}</span>{" "}
          &middot; {p.year}
        </span>
        <span style={{ color: statusColor(p.status) }}>
          {p.status.startsWith("Live") ? "● " : "○ "}
          {p.status}
        </span>
      </div>

      <h3
        className="font-serif m-0 mb-1.5"
        style={{
          fontWeight: 500,
          fontSize: compact ? 26 : 32,
          lineHeight: 1.05,
          letterSpacing: "-0.015em",
        }}
      >
        {p.title}
      </h3>

      <p
        className="font-serif italic m-0 mb-4"
        style={{ color: "#3a3a35", fontSize: compact ? 16 : 18 }}
      >
        {p.tagline}
      </p>

      <p
        className="font-serif leading-relaxed m-0"
        style={{ color: "#3a3a35", textWrap: "pretty", fontSize: compact ? 14 : 15.5 }}
      >
        {p.description}
      </p>

      {/* Mini visual — pushed to the bottom so cards of unequal text align */}
      <div className="mt-auto pt-5">
        <div
          className="overflow-hidden"
          style={{
            height: compact ? 72 : 88,
            background: "#f4efe4",
            border: "1px solid #d4c9af",
            borderRadius: 2,
          }}
        >
          <ProjectVisual kind={p.visual} />
        </div>
      </div>

      {/* Bottom meta */}
      <div
        className="flex flex-wrap justify-between items-center gap-x-4 gap-y-2 mt-4 font-mono text-[10px] text-muted-foreground uppercase"
        style={{ letterSpacing: "0.1em" }}
      >
        <span>{p.tags.join(" · ")}</span>
        {p.links.length > 0 && (
          <span className="flex items-center gap-3">
            {p.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="fn-link font-serif italic normal-case text-sm"
                style={{ letterSpacing: "normal" }}
              >
                {l.label} &rarr;
              </a>
            ))}
          </span>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-5 md:px-14" style={{ paddingTop: 40, paddingBottom: 80 }}>
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

      {/* Heading */}
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
          style={{ color: "#3a3a35", maxWidth: 360, textWrap: "pretty" }}
        >
          A running ledger of what&rsquo;s underway, what&rsquo;s shipped, and what
          we&rsquo;re still puzzling over.
        </p>
      </div>

      {/* Tier 1 — featured */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {FEATURED.map((p, i) => (
          <Card key={p.id} project={p} index={i + 1} />
        ))}
      </div>

      {/* Tier 2 — the ledger */}
      <div
        className="mt-20 pt-12"
        style={{ borderTop: "1px solid #d4c9af" }}
      >
        <div className="grid gap-4 md:gap-12 mb-12 md:[grid-template-columns:180px_1fr]">
          <div
            className="font-mono text-[10px] text-muted-foreground uppercase flex items-baseline gap-2.5 pt-2"
            style={{ letterSpacing: "0.18em" }}
          >
            <span
              className="inline-block relative"
              style={{ width: 18, height: 1, background: accent, top: -3 }}
            />
            <span>Also in the lab</span>
          </div>
          <div style={{ maxWidth: 680 }}>
            <p className="font-serif text-[19px] leading-normal m-0" style={{ textWrap: "pretty" }}>
              Twenty repositories since October 2025. Most were a weekend or two and
              stayed that way: a read-it-later app, a rent-versus-buy model, a podcast
              chatbot, a native tree finder. The habit is the point. These two are the
              ones worth your click.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SHIPPED.map((p, i) => (
            <Card key={p.id} project={p} index={FEATURED.length + i + 1} compact />
          ))}
        </div>
      </div>
    </section>
  );
}
