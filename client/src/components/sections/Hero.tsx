import { useState, useEffect } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Every vertical value here is paired, and the phone half switches at 600px
  // rather than at md, because that is where .fn-mountain hands the artwork
  // back to the desktop treatment: under 600px the spacing composes the hero
  // against the blown-up drawing (meta line high, headline in the clear sky
  // above the summit, links down on the treeline), and from 600px up it is the
  // untouched original, where the mountain is centered at 52% of the section
  // and the bottom padding holds the section at its original height.
  return (
    <section
      className="relative overflow-hidden pt-8 min-[600px]:pt-[60px] pb-6 min-[600px]:pb-[100px] md:pb-[184px]"
      style={{ paddingLeft: 56, paddingRight: 56 }}
    >
      {/* Mountain backdrop. Placement lives in .fn-mountain so the mobile
          breakpoint can override it; parallax rides on the inner wrapper so
          this inline transform does not clobber the CSS centering. */}
      <div className="fn-mountain">
        <div
          style={{
            transform: `translateY(${scrollY * 0.08}px)`,
            willChange: "transform",
          }}
        >
          <img
            src="/assets/mt_hood_clean.svg"
            alt=""
            className="w-full h-auto block"
            style={{
              opacity: 0,
              animation: "fnMountainFade 1.6s ease-out 0.3s forwards",
            }}
          />
        </div>
      </div>

      {/* Top meta line */}
      <div
        className="fn-anim-1 relative z-[1] mb-11 min-[600px]:mb-20 flex flex-col sm:flex-row justify-between font-mono text-[11px] text-muted-foreground uppercase"
        style={{ letterSpacing: "0.12em" }}
      >
        <span>
          <span className="text-accent">N&deg; 001</span> &mdash; Field Notes
        </span>
        <span>45.3736&deg; N, 121.6960&deg; W</span>
        <span>Est. Portland, OR</span>
      </div>

      <div className="relative z-[1] pb-0 min-[600px]:pb-[60px]" style={{ maxWidth: 760 }}>
        <h1
          className="fn-anim-2 font-serif"
          style={{
            fontWeight: 400,
            fontSize: "clamp(48px, 7vw, 88px)",
            lineHeight: 0.95,
            letterSpacing: "-0.025em",
            margin: 0,
          }}
        >
          Chase the<br />
          <span className="italic font-light text-accent">unknown.</span>
        </h1>

        {/* The mobile gap is what drops the two links onto the treeline; the
            mountain fills the space between them and the headline. */}
        <div className="fn-anim-3 flex flex-wrap gap-3.5 mt-[240px] min-[600px]:mt-9">
          <a
            href="#projects"
            className="inline-block rounded-sm text-[13px] font-medium no-underline"
            style={{
              padding: "12px 22px",
              background: "#1c1d1a",
              color: "#f4efe4",
              letterSpacing: "0.02em",
            }}
          >
            See what's in the lab &rarr;
          </a>
          <a
            href="https://github.com/enflory"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm text-[13px] font-medium no-underline"
            style={{
              padding: "12px 22px",
              background: "transparent",
              color: "#1c1d1a",
              letterSpacing: "0.02em",
              border: "1px solid #1c1d1a44",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.3-3.2-.2-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
