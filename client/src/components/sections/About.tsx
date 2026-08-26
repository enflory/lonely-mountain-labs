const LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ethanflory/" },
  { label: "GitHub", href: "https://github.com/enflory" },
  { label: "Email", href: "mailto:ethan@lonelymtnlabs.com" },
];

export default function About() {
  return (
    <section
      id="about"
      className="px-5 md:px-14"
      style={{ paddingTop: 72, paddingBottom: 40, borderTop: "1px solid #d4c9af" }}
    >
      <div style={{ maxWidth: 680 }}>
        <h2
          className="font-serif m-0 mb-7"
          style={{
            fontWeight: 400,
            fontSize: "clamp(30px, 3.6vw, 44px)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          Three fields, one habit.
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
          <p className="m-0" style={{ textWrap: "pretty" }}>
            The pattern doesn&rsquo;t change much. Find the gap, learn the domain fast
            enough to be useful, build the thing. The projects below are that same
            habit pointed at whatever I was curious about, which is why a
            techno-economic model sits next to a pixel-art game.
          </p>
        </div>

        <div
          className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-8 font-mono text-[11px] uppercase"
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
    </section>
  );
}
