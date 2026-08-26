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

function LotrViz() {
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

  const ring = 32;
  const points = Array.from({ length: ring }, (_, i) => {
    const angle = (i / ring) * Math.PI * 2;
    return { x: Math.round(6 + Math.cos(angle) * 5), y: Math.round(6 + Math.sin(angle) * 5) };
  });
  const glintAngle = t * 0.9;
  const glint = {
    x: Math.round(6 + Math.cos(glintAngle) * 5),
    y: Math.round(6 + Math.sin(glintAngle) * 5),
  };
  const blink = (t % 1.2) < 0.7;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-1.5" style={{ padding: "10px 18px" }}>
      <svg width="26" height="26" viewBox="0 0 13 13" style={{ imageRendering: "pixelated" }}>
        {points.map((p, i) => (
          <rect key={i} x={p.x} y={p.y} width={1} height={1} fill={accent} />
        ))}
        <rect x={glint.x} y={glint.y} width={1} height={1} fill={fg} />
      </svg>
      <div
        className="font-serif text-center"
        style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: fg }}
      >
        The Lord of the Rings RPG
      </div>
      <div
        className="font-mono text-[9px] uppercase"
        style={{ letterSpacing: "0.18em", color: accent, visibility: blink ? "visible" : "hidden" }}
      >
        Press enter
      </div>
    </div>
  );
}


function AgentViz() {
  const [t, setT] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setT((v) => v + 1), 1400);
    return () => clearInterval(id);
  }, []);

  const steps = [
    { label: "read", detail: "dbt/marts/fct_orders.sql" },
    { label: "query", detail: "snowflake · 1.2s" },
    { label: "answer", detail: "net sales, wk 34" },
    { label: "pr", detail: "memory/skills updated" },
  ];
  const active = t % steps.length;

  return (
    <div className="w-full h-full flex flex-col justify-center gap-1.5" style={{ padding: "12px 18px" }}>
      {steps.map((s, i) => {
        const on = i === active;
        const done = i < active;
        return (
          <div key={s.label} className="flex items-center gap-2.5 font-mono text-[9px]" style={{ letterSpacing: "0.06em" }}>
            <span
              className="inline-block rounded-full shrink-0"
              style={{
                width: 5,
                height: 5,
                background: on ? accent : done ? fg : muted,
                opacity: on || done ? 1 : 0.4,
                transition: "background 0.4s, opacity 0.4s",
              }}
            />
            <span
              className="uppercase shrink-0"
              style={{ width: 42, color: on ? accent : fg, opacity: on ? 1 : 0.55, transition: "opacity 0.4s, color 0.4s" }}
            >
              {s.label}
            </span>
            <span
              className="truncate"
              style={{ color: fg, opacity: on ? 0.75 : 0.25, transition: "opacity 0.4s" }}
            >
              {s.detail}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function HeatViz() {
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

  // 0 -> 92 C over 2.2s, hold, repeat
  const cycle = t % 5;
  const ramp = Math.min(1, cycle / 2.2);
  const temp = Math.round(10 + ramp * 82);
  const wh = Math.round(ramp * 51);

  return (
    <div className="w-full h-full flex items-center gap-4" style={{ padding: "12px 18px" }}>
      <div className="relative shrink-0" style={{ width: 34, height: 48 }}>
        {/* vessel */}
        <div
          className="absolute inset-x-0 bottom-0"
          style={{ height: 44, border: `1px solid ${fg}66`, borderRadius: "2px 2px 4px 4px", overflow: "hidden" }}
        >
          <div
            className="absolute inset-x-0 bottom-0"
            style={{ height: `${20 + ramp * 55}%`, background: accent, opacity: 0.18 + ramp * 0.5, transition: "opacity 0.1s" }}
          />
        </div>
        {/* steam */}
        {ramp > 0.85 &&
          [0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: 2,
                height: 2,
                left: 8 + i * 9,
                top: -2 + Math.sin(t * 3 + i) * 3,
                background: fg,
                opacity: 0.35,
              }}
            />
          ))}
      </div>

      <div className="flex flex-col gap-1 min-w-0">
        <div className="font-mono text-[9px] uppercase" style={{ letterSpacing: "0.12em", color: muted }}>
          one heat &middot; 0.4 L
        </div>
        <div className="font-serif" style={{ fontSize: 20, lineHeight: 1, color: fg }}>
          {temp}
          <span style={{ fontSize: 11, color: muted }}>&deg;C</span>
        </div>
        <div className="font-mono text-[9px]" style={{ letterSpacing: "0.08em", color: accent }}>
          {wh} Wh drawn
        </div>
      </div>
    </div>
  );
}

export default function ProjectVisual({ kind }: { kind: string }) {
  switch (kind) {
    case "volume":
      return <VolumeViz />;
    case "pages":
      return <PagesViz />;
    case "lotr":
      return <LotrViz />;
    case "agent":
      return <AgentViz />;
    case "heat":
      return <HeatViz />;
    default:
      return null;
  }
}
