import { useState, useEffect } from "react";

const fg = "#1a1a1a";
const muted = "#9a9a93";
const accent = "#9c6b3a";

function VolumeViz() {
  const [t, setT] = useState(0);
  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const tick = () => {
      setT((performance.now() - start) / 1000);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const cycle = t % 7;
  let level: number;
  if (cycle < 3) level = 0.85;
  else if (cycle < 3.5) level = 0.85 - ((cycle - 3) / 0.5) * 0.65;
  else if (cycle < 6) level = 0.2;
  else level = 0.2 + ((cycle - 6) / 1) * 0.65;
  level = Math.max(0.15, Math.min(0.95, level));
  const isAd = cycle >= 3.5 && cycle < 6;

  return (
    <div className="w-full h-full flex flex-col justify-center gap-2.5" style={{ padding: "14px 18px" }}>
      <div className="flex justify-between items-center font-mono text-[10px] text-muted-foreground uppercase" style={{ letterSpacing: "0.08em" }}>
        <span>{isAd ? "AD DETECTED" : "PLAYING"}</span>
        <span>{Math.round(level * 100)}%</span>
      </div>
      <div className="w-full h-1 rounded-sm overflow-hidden" style={{ background: muted + "33" }}>
        <div
          className="h-full"
          style={{
            width: `${level * 100}%`,
            background: isAd ? accent : fg,
            transition: "width 0.1s linear, background 0.3s",
          }}
        />
      </div>
      <div className="flex items-end gap-[3px] h-7">
        {Array.from({ length: 24 }).map((_, i) => {
          const phase = t * 8 + i * 0.4;
          const h = (Math.sin(phase) * 0.4 + 0.5) * level * 28 + 4;
          return (
            <div
              key={i}
              className="rounded-sm"
              style={{ width: 3, height: h, background: fg, opacity: 0.7 }}
            />
          );
        })}
      </div>
    </div>
  );
}

function VoiceViz() {
  const [t, setT] = useState(0);
  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const tick = () => {
      setT((performance.now() - start) / 1000);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const bars = 40;
  return (
    <div className="w-full h-full flex flex-col justify-center gap-2.5" style={{ padding: "14px 18px" }}>
      <div className="font-mono text-[10px] text-muted-foreground uppercase" style={{ letterSpacing: "0.08em" }}>
        <span className="text-accent">&bull;</span> Listening &middot; 02:14
      </div>
      <div className="flex items-center justify-center gap-[2px] h-9">
        {Array.from({ length: bars }).map((_, i) => {
          const center = bars / 2;
          const distFromCenter = Math.abs(i - center) / center;
          const env = 1 - distFromCenter * 0.7;
          const phase = t * 4 + i * 0.3;
          const h = (Math.sin(phase) * 0.5 + Math.sin(phase * 2.3) * 0.3 + 0.5) * env * 32 + 2;
          return (
            <div
              key={i}
              className="rounded-sm"
              style={{ width: 2, height: h, background: fg, opacity: 0.85 }}
            />
          );
        })}
      </div>
      <div className="font-serif text-[11px] italic text-muted-foreground text-center leading-snug">
        "...the project I'm proudest of..."
      </div>
    </div>
  );
}

function PagesViz() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 relative">
      <div className="relative" style={{ width: 90, height: 60 }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute inset-0 overflow-hidden"
            style={{
              background: "#fffaf0",
              border: `1px solid ${fg}33`,
              transform: `translate(${i * 4}px, ${-i * 4}px) rotate(${(i - 1) * 2}deg)`,
              padding: 8,
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: 5,
              lineHeight: 1.3,
              color: fg,
            }}
          >
            <div style={{ fontWeight: 600, fontSize: 6, marginBottom: 2 }}>Chapter {i + 1}</div>
            <div style={{ opacity: 0.7 }}>
              In the long days that followed, the road wound east. We had set out at dawn, with little more than what we could carry, and a faint hope that what we sought might still be found.
            </div>
          </div>
        ))}
        <div
          className="absolute font-mono text-[9px] text-accent"
          style={{ top: -8, right: -16, transform: "rotate(8deg)" }}
        >
          + edit
        </div>
      </div>
    </div>
  );
}

function GiftViz() {
  const days = Array.from({ length: 28 }, (_, i) => i + 1);
  const marked = [4, 12, 19];

  return (
    <div className="w-full h-full flex flex-col gap-2" style={{ padding: 14 }}>
      <div className="flex justify-between items-baseline font-mono text-[9px] text-muted-foreground uppercase" style={{ letterSpacing: "0.08em" }}>
        <span>October</span>
        <span>3 upcoming</span>
      </div>
      <div className="grid grid-cols-7 gap-[2px] flex-1">
        {days.map((d) => {
          const isMarked = marked.includes(d);
          return (
            <div
              key={d}
              className="flex items-center justify-center font-mono text-[8px] rounded-sm aspect-square"
              style={{
                color: isMarked ? "#fff" : fg,
                background: isMarked ? accent : "transparent",
                opacity: isMarked ? 1 : 0.5,
              }}
            >
              {d}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function RangerViz() {
  const roles = [
    { co: "Anthropic", role: "Product Engineer", score: 94 },
    { co: "Vercel", role: "Founding DevRel", score: 88 },
    { co: "Linear", role: "Product Manager", score: 81 },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center gap-1.5" style={{ padding: "12px 16px" }}>
      <div className="flex justify-between items-baseline font-mono text-[9px] text-muted-foreground uppercase mb-0.5" style={{ letterSpacing: "0.08em" }}>
        <span>
          <span className="text-accent">&bull;</span> Daily briefing
        </span>
        <span>3 new roles</span>
      </div>
      {roles.map((r, i) => (
        <div key={i} className="flex items-center gap-2">
          <span
            className="font-mono text-[9px] overflow-hidden"
            style={{ color: fg, width: 50, whiteSpace: "nowrap", textOverflow: "ellipsis" }}
          >
            {r.co}
          </span>
          <span
            className="font-serif italic text-[10px] flex-1 overflow-hidden"
            style={{ color: muted, whiteSpace: "nowrap", textOverflow: "ellipsis" }}
          >
            {r.role}
          </span>
          <div className="rounded-sm overflow-hidden" style={{ width: 28, height: 3, background: muted + "33" }}>
            <div style={{ width: `${r.score}%`, height: "100%", background: accent }} />
          </div>
          <span className="font-mono text-[9px]" style={{ color: fg, width: 16, textAlign: "right" }}>
            {r.score}
          </span>
        </div>
      ))}
    </div>
  );
}

function KnowledgeViz() {
  return (
    <div className="w-full h-full flex items-center gap-3" style={{ padding: "14px 18px" }}>
      <div className="flex flex-col gap-[3px] flex-1">
        {["Architecture", "Tolkien lore", "Swift patterns", "AI prompts"].map((label, i) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className="rounded-sm"
              style={{
                width: 6,
                height: 6,
                background: i === 0 ? accent : i === 1 ? fg : muted,
                opacity: i > 1 ? 0.5 : 0.8,
              }}
            />
            <div
              className="font-mono text-[8px] uppercase"
              style={{
                color: i === 0 ? fg : muted,
                letterSpacing: "0.06em",
              }}
            >
              {label}
            </div>
            <div
              className="flex-1 h-[1px]"
              style={{ background: `${muted}44` }}
            />
            <div
              className="font-mono text-[8px]"
              style={{ color: muted }}
            >
              {[14, 9, 7, 3][i]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectVisual({ kind }: { kind: string }) {
  switch (kind) {
    case "volume":
      return <VolumeViz />;
    case "voice":
      return <VoiceViz />;
    case "pages":
      return <PagesViz />;
    case "gift":
      return <GiftViz />;
    case "knowledge":
      return <KnowledgeViz />;
    case "ranger":
      return <RangerViz />;
    default:
      return null;
  }
}
