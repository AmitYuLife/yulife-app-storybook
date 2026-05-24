import React from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { elevation } from "./elevation";
import { palette } from "./colors";
import type { ElevationKey } from "./elevation";

const meta: Meta = {
  title: "Foundations/Elevation",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Elevation

Token-driven box-shadow scale that communicates surface height and z-layering.
The shadow colour is always \`palette.transBlack8\` — black at 8% opacity — keeping
shadows subtle and consistent across all light backgrounds.

Figma reference: [App — Core UI, node 11048:4475](https://www.figma.com/design/aNnODOQlMlk38LrQVs63oq/App---Core-UI?node-id=11048-4475)

### Usage

\`\`\`ts
import { elevation } from "@/tokens/elevation";

boxShadow: elevation.toast   // floating / toast surfaces
boxShadow: elevation.none    // flat / resting surfaces
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

// ─── Scale story ──────────────────────────────────────────────────────────────

type ElevationEntry = {
  key: ElevationKey;
  value: string;
  description: string;
  shadowColor: string;
};

const entries: ElevationEntry[] = [
  {
    key: "none",
    value: elevation.none,
    description: "Flat surface — resting z-level, no lift",
    shadowColor: "transparent",
  },
  {
    key: "toast",
    value: elevation.toast,
    description: "Toast / floating surface — lifted above page content",
    shadowColor: palette.transBlack8,
  },
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
        Elevation scale
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>
        {entries.map(({ key, value, description }) => (
          <div key={key} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 12 }}>
            {/* Swatch */}
            <div
              style={{
                width: 120,
                height: 80,
                borderRadius: 12,
                background: "#FFFFFF",
                boxShadow: value,
                border: "1px solid #F3F4F6",
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

            {/* CSS value */}
            <span style={{ ...MONO, maxWidth: 160, lineHeight: 1.5, wordBreak: "break-all" }}>{value}</span>

            {/* Description */}
            <span style={{ fontSize: 11, color: "#9CA3AF", maxWidth: 160, lineHeight: 1.4 }}>{description}</span>
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story:
          "Each swatch is a white card rendered with its elevation token applied as `boxShadow`. The `none` token produces a flat card; `toast` adds the 8 px hard-offset shadow from Figma.",
      },
    },
  },
};

// ─── Token table ─────────────────────────────────────────────────────────────

export const TokenTable: StoryObj = {
  name: "Token Table",
  render: () => (
    <div style={{ padding: "40px 48px", fontFamily: "Inter, system-ui, sans-serif", maxWidth: 640 }}>
      {/* Colour chip note */}
      <div style={{ marginBottom: 24, display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 16,
            height: 16,
            borderRadius: 4,
            background: palette.transBlack8,
            border: "1px solid #E5E7EB",
          }}
        />
        <span style={{ fontSize: 12, color: "#6B7280" }}>
          Shadow colour — <code style={{ fontFamily: "monospace" }}>palette.transBlack8</code> ({palette.transBlack8})
        </span>
      </div>

      {/* Column headers */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "72px 200px 1fr",
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
            gridTemplateColumns: "72px 200px 1fr",
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
          <span style={{ ...MONO, lineHeight: 1.5, wordBreak: "break-all" }}>{value}</span>
          <span style={{ fontSize: 12, color: "#6B7280" }}>{description}</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story: "Quick-reference table mapping every elevation token to its CSS value and intended usage context.",
      },
    },
  },
};
