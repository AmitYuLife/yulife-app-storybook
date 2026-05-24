import React from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import YuLifeSquareColourSvg from "./svg/YuLifeSquareColour.svg?react";
import YuLifeSquareMonoSvg from "./svg/YuLifeSquareMono.svg?react";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta = {
  title: "Foundations/Logo",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Logo

The YuLife logo mark, available in two variants for use across light and dark surfaces.

**Colour** — Pink square mark (\`#E30D76\`) on a transparent background. Use on white or light-grey surfaces.

**Mono** — White square mark on a transparent background. Use on dark, image, or brand-coloured backgrounds.

### Import

\`\`\`tsx
import YuLifeSquareColour from "@/icons/svg/YuLifeSquareColour.svg?react";
import YuLifeSquareMono   from "@/icons/svg/YuLifeSquareMono.svg?react";

// Render at any size via width / height props
<YuLifeSquareColour width={32} height={32} aria-label="YuLife" role="img" />
<YuLifeSquareMono   width={32} height={32} aria-label="YuLife" role="img" />
\`\`\`

### Guidelines

- Always preserve the logo's aspect ratio (1:1 square).
- Do not recolour, skew, rotate, or add drop shadows.
- Maintain a clear-space margin of at least **50%** of the logo's width on all sides.
- Minimum display size: **20 × 20 px**.
        `,
      },
    },
  },
};

export default meta;

// ─── Shared styles ────────────────────────────────────────────────────────────

const sectionLabel: React.CSSProperties = {
  fontFamily: "Inter, system-ui, sans-serif",
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: "0.07em",
  textTransform: "uppercase",
  color: "#9CA3AF",
  marginBottom: 16,
};

const card: React.CSSProperties = {
  borderRadius: 12,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 12,
  padding: 32,
};

const caption: React.CSSProperties = {
  fontFamily: "Inter, system-ui, sans-serif",
  fontSize: 12,
  fontWeight: 500,
  color: "#6B7280",
  textAlign: "center",
};

const monoCaption: React.CSSProperties = {
  ...caption,
  color: "rgba(255,255,255,0.55)",
};

const codePill: React.CSSProperties = {
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
  fontSize: 11,
  color: "#9CA3AF",
  background: "#F3F4F6",
  borderRadius: 4,
  padding: "2px 6px",
};

const monoCodePill: React.CSSProperties = {
  ...codePill,
  background: "rgba(255,255,255,0.1)",
  color: "rgba(255,255,255,0.45)",
};

// ─── Colour variant ───────────────────────────────────────────────────────────

export const Colour: StoryObj = {
  name: "Colour",
  render: () => (
    <div style={{ padding: 40, fontFamily: "Inter, system-ui, sans-serif" }}>
      <p style={sectionLabel}>Colour variant</p>
      <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
        {/* On white */}
        <div style={{ ...card, background: "#FFFFFF", border: "1px solid #F3F4F6", flex: 1, minWidth: 200 }}>
          <YuLifeSquareColourSvg width={64} height={64} aria-label="YuLife" role="img" />
          <div>
            <p style={caption}>On white</p>
            <p style={{ ...codePill, display: "inline-block", marginTop: 4 }}>#FFFFFF</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story:
          "The colour logo mark on light backgrounds. This is the default variant for use on white or near-white surfaces.",
      },
    },
  },
};

// ─── Mono variant ─────────────────────────────────────────────────────────────

export const Mono: StoryObj = {
  name: "Mono",
  render: () => (
    <div style={{ padding: 40, fontFamily: "Inter, system-ui, sans-serif" }}>
      <p style={sectionLabel}>Mono variant</p>
      <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
        {/* On brand pink */}
        <div style={{ ...card, background: "#E30D76", flex: 1, minWidth: 200 }}>
          <YuLifeSquareMonoSvg width={64} height={64} aria-label="YuLife" role="img" />
          <div>
            <p style={monoCaption}>On brand pink</p>
            <p style={{ ...monoCodePill, display: "inline-block", marginTop: 4 }}>#E30D76</p>
          </div>
        </div>
        {/* On dark */}
        <div style={{ ...card, background: "#111827", flex: 1, minWidth: 200 }}>
          <YuLifeSquareMonoSvg width={64} height={64} aria-label="YuLife" role="img" />
          <div>
            <p style={monoCaption}>On dark</p>
            <p style={{ ...monoCodePill, display: "inline-block", marginTop: 4 }}>#111827</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "centered",
    docs: {
      description: { story: "The mono (white) logo mark on dark, brand-coloured, or image backgrounds." },
    },
  },
};

// ─── Sizes ────────────────────────────────────────────────────────────────────

const SIZES: { label: string; px: number }[] = [
  { label: "20 — minimum", px: 20 },
  { label: "24 — nav bar", px: 24 },
  { label: "32 — default", px: 32 },
  { label: "48 — medium", px: 48 },
  { label: "64 — large", px: 64 },
  { label: "96 — hero", px: 96 },
];

export const Sizes: StoryObj = {
  name: "Sizes",
  render: () => (
    <div style={{ padding: 40, fontFamily: "Inter, system-ui, sans-serif" }}>
      <p style={sectionLabel}>Size scale</p>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 32, flexWrap: "wrap" }}>
        {SIZES.map(({ label, px }) => (
          <div key={px} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
            <YuLifeSquareColourSvg width={px} height={px} aria-label="YuLife" role="img" />
            <div style={{ textAlign: "center" }}>
              <p style={{ ...caption, fontWeight: 600, color: "#374151" }}>{px}px</p>
              <p style={{ ...caption, marginTop: 2 }}>{label.split(" — ")[1]}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 40, padding: 20, background: "#F9FAFB", borderRadius: 8, border: "1px solid #E5E7EB" }}>
        <p style={{ ...caption, textAlign: "left", color: "#374151", fontWeight: 600, marginBottom: 6 }}>
          Minimum size
        </p>
        <p style={{ ...caption, textAlign: "left", lineHeight: 1.6 }}>
          Do not render the logo below <strong>20 × 20 px</strong>. At this size the letterforms remain legible. The
          standard nav bar size is <strong>24 × 24 px</strong>.
        </p>
      </div>
    </div>
  ),
  parameters: {
    layout: "centered",
    docs: {
      description: { story: "Recommended sizes. Pass `width` and `height` props to scale the SVG component." },
    },
  },
};
