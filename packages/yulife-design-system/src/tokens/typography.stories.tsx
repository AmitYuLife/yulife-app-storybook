import React from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fontFamily, fontSize, fontWeight, textStyles } from "./typography";

const meta: Meta = {
  title: "Foundations/Typography",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Typography

The type system uses **Bariol** (Thin · Light · Regular · Bold) across all styles.
Sourced from the [Brand — Foundations](https://www.figma.com/design/Ac90Diav91cBdIGET9uCXs/Brand---Foundations?node-id=6786-26) Figma file.

### Usage

Reference the pre-composed \`textStyles\` presets in StyleSheet or inline styles:

\`\`\`ts
import { textStyles, colors } from "@/tokens";

const styles = StyleSheet.create({
  title: {
    ...textStyles.heading1,
    color: colors.textPrimary,
  },
});
\`\`\`

Or use individual scale tokens:

\`\`\`ts
import { fontSize, fontWeight, lineHeight } from "@/tokens/typography";

fontSize.md        // 20
fontWeight.bold    // "700"
lineHeight.normal  // 24
\`\`\`
        `,
      },
    },
  },
};

export default meta;

// ─── Shared styles ────────────────────────────────────────────────────────────

const LABEL_STYLE: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "#9CA3AF",
};

const META_STYLE: React.CSSProperties = {
  fontFamily: "monospace",
  fontSize: 11,
  color: "#C4C4C4",
  whiteSpace: "nowrap",
};

// ─── Type Specimen ────────────────────────────────────────────────────────────

type StyleRow = {
  key: keyof typeof textStyles;
  label: string;
  preview: string;
};

const HEADING_PREVIEW = "The quick brown fox";
const BODY_PREVIEW = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const LABEL_PREVIEW = "Description text goes here";

const WEIGHT_NAMES: Record<string, string> = {
  "100": "Thin",
  "300": "Light",
  "400": "Regular",
  "700": "Bold",
};

// Column widths: token | preview | size | line-height | weight | tracking
const COLS = "164px 1fr 52px 52px 72px 64px";

const COL_HEADERS = ["Token", "Preview", "Size", "LH", "Weight", "Tracking"];

const headingRows: StyleRow[] = [
  { key: "heading1", label: "Heading 1", preview: HEADING_PREVIEW },
  { key: "heading2", label: "Heading 2", preview: HEADING_PREVIEW },
  { key: "heading3", label: "Heading 3", preview: HEADING_PREVIEW },
];

const bodyRows: StyleRow[] = [
  { key: "body1Regular", label: "Body 1 Regular", preview: BODY_PREVIEW },
  { key: "body1Bold", label: "Body 1 Bold", preview: BODY_PREVIEW },
  { key: "body2Regular", label: "Body 2 Regular", preview: BODY_PREVIEW },
  { key: "body2Bold", label: "Body 2 Bold", preview: BODY_PREVIEW },
];

const labelRows: StyleRow[] = [
  { key: "button", label: "Button", preview: LABEL_PREVIEW },
  { key: "label1Regular", label: "Label 1 Regular", preview: LABEL_PREVIEW },
  { key: "label1Bold", label: "Label 1 Bold", preview: LABEL_PREVIEW },
  { key: "label2Regular", label: "Label 2 Regular", preview: LABEL_PREVIEW },
  { key: "label2Bold", label: "Label 2 Bold", preview: LABEL_PREVIEW },
  { key: "label3Regular", label: "Label 3 Regular", preview: LABEL_PREVIEW },
  { key: "label3Bold", label: "Label 3 Bold", preview: LABEL_PREVIEW },
];

const StyleGroup = ({ title, rows }: { title: string; rows: StyleRow[] }) => {
  return (
    <div style={{ marginBottom: 48 }}>
      {/* Group label */}
      <div style={{ ...LABEL_STYLE, marginBottom: 10 }}>{title}</div>

      {/* Column headers */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: COLS,
          gap: "0 16px",
          padding: "6px 12px",
          borderBottom: "2px solid #E5E7EB",
          marginBottom: 0,
        }}
      >
        {COL_HEADERS.map((h) => (
          <span
            key={h}
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#9CA3AF",
            }}
          >
            {h}
          </span>
        ))}
      </div>

      {/* Rows */}
      {rows.map(({ key, label, preview }) => {
        const s = textStyles[key];
        return (
          <div
            key={key}
            style={{
              display: "grid",
              gridTemplateColumns: COLS,
              gap: "0 16px",
              alignItems: "center",
              padding: "14px 12px",
              borderBottom: "1px solid #F3F4F6",
            }}
          >
            {/* Token name */}
            <div>
              <code
                style={{
                  fontSize: 11,
                  background: "#F3F4F6",
                  padding: "2px 6px",
                  borderRadius: 4,
                  color: "#374151",
                  whiteSpace: "nowrap",
                }}
              >
                {key}
              </code>
              <div style={{ fontSize: 10, color: "#9CA3AF", marginTop: 4 }}>{label}</div>
            </div>

            {/* Preview */}
            <span
              style={{
                fontFamily: s.fontFamily,
                fontSize: s.fontSize,
                fontWeight: s.fontWeight,
                lineHeight: `${s.lineHeight}px`,
                letterSpacing: `${s.letterSpacing}px`,
                color: "#1A1A1A",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {preview}
            </span>

            {/* Size */}
            <span style={{ ...META_STYLE }}>{s.fontSize}px</span>

            {/* Line height */}
            <span style={{ ...META_STYLE }}>{s.lineHeight}px</span>

            {/* Weight */}
            <span style={{ ...META_STYLE }}>{WEIGHT_NAMES[s.fontWeight] ?? s.fontWeight}</span>

            {/* Letter spacing */}
            <span style={{ ...META_STYLE }}>{s.letterSpacing}px</span>
          </div>
        );
      })}
    </div>
  );
};

export const TypeSpecimen: StoryObj = {
  name: "Type Specimen",
  render: () => (
    <div style={{ padding: "40px 48px", maxWidth: 1000 }}>
      <StyleGroup title="Headings" rows={headingRows} />
      <StyleGroup title="Body" rows={bodyRows} />
      <StyleGroup title="Labels" rows={labelRows} />
    </div>
  ),
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story:
          "All 14 text styles from the Figma App Typography section. Each row shows the token name, a live preview, and the four typographic axes.",
      },
    },
  },
};

// ─── Size Scale ───────────────────────────────────────────────────────────────

export const Scale: StoryObj = {
  name: "Size Scale",
  render: () => (
    <div style={{ padding: "40px 48px", fontFamily: fontFamily.sans }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {(Object.entries(fontSize) as [string, number][])
          .sort((a, b) => b[1] - a[1])
          .map(([key, px]) => (
            <div key={key} style={{ display: "flex", alignItems: "baseline", gap: 20 }}>
              <span style={{ width: 40, ...META_STYLE, flexShrink: 0, textAlign: "right" }}>{key}</span>
              <span
                style={{
                  fontSize: px,
                  fontFamily: fontFamily.sans,
                  lineHeight: 1.2,
                  color: "#1A1A1A",
                  fontWeight: "400",
                }}
              >
                The quick brown fox jumps over the lazy dog
              </span>
              <span style={{ ...META_STYLE, flexShrink: 0 }}>{px}px</span>
            </div>
          ))}
      </div>
    </div>
  ),
  parameters: {
    layout: "centered",
    docs: {
      description: { story: "The complete font-size scale from 3xs (10px) to 2xl (32px)." },
    },
  },
};

// ─── Weights ──────────────────────────────────────────────────────────────────

export const Weights: StoryObj = {
  name: "Font Weights",
  render: () => (
    <div style={{ padding: "40px 48px", fontFamily: fontFamily.sans }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        {(Object.entries(fontWeight) as [string, string][]).map(([key, weight]) => (
          <div key={key} style={{ display: "flex", alignItems: "baseline", gap: 24 }}>
            <span style={{ width: 120, ...META_STYLE, flexShrink: 0 }}>
              {key} ({weight})
            </span>
            <span
              style={{
                fontSize: 32,
                fontWeight: weight,
                fontFamily: fontFamily.sans,
                color: "#1A1A1A",
                lineHeight: 1.25,
                letterSpacing: "1px",
              }}
            >
              Bariol — The quick brown fox
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: {
    layout: "centered",
    docs: {
      description: { story: "All four Bariol weights: Thin (100), Light (300), Regular (400), Bold (700)." },
    },
  },
};

// ─── Font Family ──────────────────────────────────────────────────────────────

export const FontFamily: StoryObj = {
  name: "Font Family",
  render: () => (
    <div style={{ padding: "40px 48px" }}>
      <div style={{ ...LABEL_STYLE, marginBottom: 20 }}>Bariol</div>
      <div
        style={{
          fontFamily: fontFamily.sans,
          fontSize: 32,
          fontWeight: "700",
          color: "#1A1A1A",
          lineHeight: 1.25,
          letterSpacing: "1px",
          marginBottom: 16,
        }}
      >
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </div>
      <div
        style={{
          fontFamily: fontFamily.sans,
          fontSize: 32,
          fontWeight: "400",
          color: "#1A1A1A",
          lineHeight: 1.25,
          letterSpacing: "1px",
          marginBottom: 32,
        }}
      >
        abcdefghijklmnopqrstuvwxyz 0123456789
      </div>
      <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
        {(Object.entries(fontWeight) as [string, string][]).map(([key, weight]) => (
          <div key={key} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={LABEL_STYLE}>{key}</span>
            <span
              style={{ fontFamily: fontFamily.sans, fontSize: 48, fontWeight: weight, color: "#1A1A1A", lineHeight: 1 }}
            >
              Aa
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: {
    layout: "centered",
    docs: {
      description: { story: "Bariol — the brand typeface across all four weights." },
    },
  },
};
