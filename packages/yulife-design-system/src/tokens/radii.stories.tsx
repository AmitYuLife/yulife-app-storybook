import React from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { radii } from "./radii";
import type { RadiusKey } from "./radii";

const meta: Meta = {
  title: "Foundations/Radii",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Border Radius

Token-driven radius scale used for all rounded corners across the app.
Sourced from the [YuLife App Storybook — Variables](https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?vars=1&var-set-id=10757-1089) Figma file.

### Usage

\`\`\`ts
import { radii } from "@/tokens/radii";

const styles = StyleSheet.create({
  card:   { borderRadius: radii.md },    // 8
  button: { borderRadius: radii.pill },  // 9999
  badge:  { borderRadius: radii.sm },    // 4
});
\`\`\`
        `,
      },
    },
  },
};

export default meta;

// ─── Shared ───────────────────────────────────────────────────────────────────

const MONO: React.CSSProperties = {
  fontFamily: "monospace",
  fontSize: 11,
  color: "#9CA3AF",
};

const SWATCH_SIZE = 80;

// ─── Scale story ──────────────────────────────────────────────────────────────

type RadiusEntry = { key: RadiusKey; value: number; description: string };

const entries: RadiusEntry[] = [
  { key: "none", value: radii.none, description: "No rounding — sharp corners" },
  { key: "xs", value: radii.xs, description: "Hairline — decorative elements, SVG shapes" },
  { key: "sm", value: radii.sm, description: "Subtle — tags, badges, code snippets" },
  { key: "md", value: radii.md, description: "Standard — cards, inputs, chips" },
  { key: "lg", value: radii.lg, description: "Prominent — icon containers, dialogs" },
  { key: "xl", value: radii.xl, description: "Large — bottom sheets, elevated surfaces" },
  { key: "2xl", value: radii["2xl"], description: "Heavy — large cards, onboarding panels" },
  { key: "pill", value: radii.pill, description: "Pill — buttons, toggles, fully rounded" },
];

export const Scale: StoryObj = {
  name: "Scale",
  render: () => (
    <div style={{ padding: "40px 48px", fontFamily: "Inter, system-ui, sans-serif" }}>
      <div
        style={{
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "#9CA3AF",
          marginBottom: 32,
        }}
      >
        Border radius scale
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
        {entries.map(({ key, value, description }) => {
          const displayRadius = Math.min(value, SWATCH_SIZE / 2);
          return (
            <div key={key} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 12 }}>
              {/* Swatch */}
              <div
                style={{
                  width: SWATCH_SIZE,
                  height: SWATCH_SIZE,
                  borderRadius: displayRadius,
                  background: "linear-gradient(135deg, #7C3AED22, #7C3AED44)",
                  border: "2px solid #7C3AED44",
                  flexShrink: 0,
                }}
              />

              {/* Token name */}
              <code
                style={{
                  fontSize: 12,
                  background: "#F3F4F6",
                  padding: "2px 7px",
                  borderRadius: 4,
                  color: "#374151",
                  fontFamily: "monospace",
                }}
              >
                {key}
              </code>

              {/* Pixel value */}
              <span style={{ ...MONO }}>{value >= 9999 ? "9999 (pill)" : `${value}px`}</span>

              {/* Description */}
              <span style={{ fontSize: 11, color: "#9CA3AF", maxWidth: SWATCH_SIZE + 16, lineHeight: 1.4 }}>
                {description}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  ),
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story:
          "All eight radius tokens. The swatch corner rounding matches the token value (capped at 50% of the swatch size for the `pill` token).",
      },
    },
  },
};

// ─── Token table ─────────────────────────────────────────────────────────────

export const TokenTable: StoryObj = {
  name: "Token Table",
  render: () => (
    <div style={{ padding: "40px 48px", fontFamily: "Inter, system-ui, sans-serif", maxWidth: 560 }}>
      {/* Column headers */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "80px 64px 1fr",
          gap: "0 16px",
          padding: "6px 0",
          borderBottom: "2px solid #E5E7EB",
        }}
      >
        {["Token", "Value", "Usage"].map((h) => (
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

      {entries.map(({ key, value, description }) => (
        <div
          key={key}
          style={{
            display: "grid",
            gridTemplateColumns: "80px 64px 1fr",
            gap: "0 16px",
            alignItems: "center",
            padding: "12px 0",
            borderBottom: "1px solid #F3F4F6",
          }}
        >
          <code
            style={{
              fontSize: 11,
              background: "#F3F4F6",
              padding: "2px 6px",
              borderRadius: 4,
              color: "#374151",
              whiteSpace: "nowrap",
              display: "inline-block",
            }}
          >
            {key}
          </code>
          <span style={{ ...MONO }}>{value >= 9999 ? "9999" : `${value}px`}</span>
          <span style={{ fontSize: 12, color: "#6B7280" }}>{description}</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story: "Quick-reference table mapping every radius token to its pixel value and intended usage context.",
      },
    },
  },
};
