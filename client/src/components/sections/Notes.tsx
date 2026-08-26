const accent = "#9c6b3a";

type Note = {
  id: string;
  title: string;
  date: string; // display date, e.g. "August 2026"
  blurb: string;
  href: string;
};

// Field notes. The section renders nothing until there is at least one entry,
// so the site never promises writing it does not have.
const NOTES: Note[] = [];

export default function Notes() {
  if (NOTES.length === 0) return null;

  return (
    <section id="notes" className="px-5 md:px-14" style={{ paddingTop: 40, paddingBottom: 80 }}>
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
        <span>Notes</span>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
        <h2
          className="font-serif m-0"
          style={{
            fontWeight: 400,
            fontSize: "clamp(36px, 4.5vw, 56px)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          Notes.
        </h2>
        <p
          className="font-serif text-[17px] italic m-0"
          style={{ color: "#3a3a35", maxWidth: 360, textWrap: "pretty" }}
        >
          Things worth writing down once I understood them.
        </p>
      </div>

      <div style={{ borderTop: "1px solid #d4c9af" }}>
        {NOTES.map((n) => (
          <a
            key={n.id}
            href={n.href}
            className="fn-note grid gap-2 md:gap-10 no-underline md:[grid-template-columns:180px_1fr]"
            style={{
              borderBottom: "1px solid #d4c9af",
              padding: "22px 0",
              color: "inherit",
            }}
          >
            <div
              className="font-mono text-[10px] text-muted-foreground uppercase flex items-baseline gap-2.5 pt-1.5"
              style={{ letterSpacing: "0.18em" }}
            >
              <span
                className="inline-block relative"
                style={{ width: 18, height: 1, background: accent, top: -3 }}
              />
              <span>{n.date}</span>
            </div>
            <div style={{ maxWidth: 680 }}>
              <h3
                className="font-serif m-0 mb-1"
                style={{ fontWeight: 500, fontSize: 22, lineHeight: 1.15, letterSpacing: "-0.01em" }}
              >
                {n.title}
              </h3>
              <p
                className="font-serif text-[15px] leading-relaxed m-0"
                style={{ color: "#3a3a35", textWrap: "pretty" }}
              >
                {n.blurb}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
