const accent = "#9c6b3a";

const LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ethanflory/" },
  { label: "GitHub", href: "https://github.com/enflory" },
  { label: "Email", href: "mailto:ethan@lonelymtnlabs.com" },
];

export default function About() {
  return (
    <section id="about" className="px-5 md:px-14" style={{ paddingTop: 40, paddingBottom: 40 }}>
      {/* Section divider */}
      <div
        className="flex justify-between font-mono text-[10px] text-muted-foreground uppercase -mx-5 md:-mx-14 px-5 md:px-14 mb-14"
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
        <span>The Proprietor</span>
      </div>

      <div className="grid gap-4 md:gap-12 md:[grid-template-columns:180px_1fr]">
        <div
          className="font-mono text-[10px] text-muted-foreground uppercase flex items-baseline gap-2.5 pt-2"
          style={{ letterSpacing: "0.18em" }}
        >
          <span
            className="inline-block relative"
            style={{ width: 18, height: 1, background: accent, top: -3 }}
          />
          <span>Who</span>
        </div>

        <div style={{ maxWidth: 680 }}>
          <h2
            className="font-serif m-0 mb-6"
            style={{
              fontWeight: 400,
              fontSize: "clamp(30px, 3.6vw, 44px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            The lab is one person.
          </h2>

          <div className="font-serif text-[17px] leading-relaxed" style={{ color: "#3a3a35" }}>
            <p className="m-0 mb-4" style={{ textWrap: "pretty" }}>
              I&rsquo;m Ethan Flory. I started in mechanical engineering, then spent four
              years teaching heat transfer, thermodynamics, and fluid mechanics to
              operators in the Navy&rsquo;s nuclear power program. After that, finance at
              Nike. For the last five years I&rsquo;ve built Stio&rsquo;s data function from
              nothing: the warehouse, the models, the reporting, and now the AI agent
              that sits on top of all of it.
            </p>
            <p className="m-0 mb-4" style={{ textWrap: "pretty" }}>
              The pattern doesn&rsquo;t change much. Find the gap, learn the domain fast
              enough to be useful, build the thing. The projects below are that same
              habit pointed at whatever I was curious about that month, which is why
              a battery model sits next to a pixel-art game.
            </p>
            <p className="m-0" style={{ textWrap: "pretty" }}>
              Based outside Portland, Oregon, where I intend to stay.
            </p>
          </div>

          <div
            className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-7 font-mono text-[11px] uppercase"
            style={{ letterSpacing: "0.1em" }}
          >
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="fn-link no-underline"
                style={{ color: "#1c1d1a" }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
