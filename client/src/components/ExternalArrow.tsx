/**
 * Outbound-link arrow.
 *
 * This used to be the character U+2197 (&#8599;). Neither Inter nor Newsreader
 * carries that glyph, so iOS fell back to Apple Color Emoji and drew a blue
 * emoji tile next to every external link. Drawing the arrow ourselves is the
 * only version that cannot fall back to anything.
 *
 * Stroke weight and round joins match the summit mark in the navbar logo.
 */
export default function ExternalArrow() {
  return (
    <svg
      className="fn-arrow"
      width="11"
      height="11"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3.2 8.8 8.8 3.2" />
      <path d="M4.4 3.2h4.4v4.4" />
    </svg>
  );
}
