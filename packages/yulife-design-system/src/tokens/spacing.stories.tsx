import React from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { spacing, space } from "./spacing";

const meta: Meta = {
  title: "Foundations/Spacing",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Spacing

An 8-point grid extended with sub-grid values for tight layouts.
Sourced from the [YuLife App Storybook — Variables](https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?vars=1&var-set-id=10757-1089) Figma file.

### Usage

\`\`\`ts
import { spacing, space } from "@/tokens/spacing";

// Raw scale — indexed by multiplier
spacing[4]   // 16px (base unit)
spacing[2]   // 8px
spacing[6]   // 24px

// Semantic aliases — preferred in component code
space.componentPaddingMD    // 16
space.pagePaddingHorizontal // 16
space.stackSM               // 8
\`\`\`
        `,
      },
    },
  },
};

export default meta;

// ─── Shared ───────────────────────────────────────────────────────────────────

const LABEL: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "#9CA3AF",
};

const MONO: React.CSSProperties = {
  fontFamily: "monospace",
  fontSize: 11,
  color: "#9CA3AF",
};

// ─── Scale story ──────────────────────────────────────────────────────────────

const scaleEntries = (Object.entries(spacing) as [string, number][]).sort((a, b) => a[1] - b[1]);

export const Scale: StoryObj = {
  name: "Scale",
  render: () => (
    <div style={{ padding: "40px 48px", maxWidth: 640, fontFamily: "Inter, system-ui, sans-serif" }}>
      <div style={{ ...LABEL, marginBottom: 24 }}>Spacing scale</div>

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {scaleEntries.map(([key, px]) => (
          <div
            key={key}
            style={{ display: "grid", gridTemplateColumns: "48px 1fr 48px", alignItems: "center", gap: 16 }}
          >
            {/* Key label */}
            <span style={{ ...MONO, textAlign: "right", flexShrink: 0 }}>{key}</span>

            {/* Bar */}
            <div style={{ position: "relative", height: 20, display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: Math.max(px, 2),
                  height: px === 0 ? 2 : Math.min(px, 20),
                  background: px === 0 ? "#E5E7EB" : "#7C3AED",
                  borderRadius: 3,
                  opacity: 0.15 + Math.min(px / 128, 0.85),
                  flexShrink: 0,
                }}
              />
            </div>

            {/* Pixel value */}
            <span style={{ ...MONO }}>{px}px</span>
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
          "The complete spacing scale from 0 to 128 px. Each step is a multiple of the 4 px sub-grid or the 8 px base unit.",
      },
    },
  },
};

// ─── Semantic aliases story ───────────────────────────────────────────────────

type AliasGroup = {
  label: string;
  keys: (keyof typeof space)[];
};

const aliasGroups: AliasGroup[] = [
  {
    label: "Component padding",
    keys: ["componentPaddingXS", "componentPaddingSM", "componentPaddingMD", "componentPaddingLG"],
  },
  {
    label: "Page padding",
    keys: ["pagePaddingHorizontal", "pagePaddingVertical"],
  },
  {
    label: "Stack (vertical gap)",
    keys: ["stackXS", "stackSM", "stackMD", "stackLG", "stackXL"],
  },
  {
    label: "Inline (horizontal gap)",
    keys: ["inlineXS", "inlineSM", "inlineMD"],
  },
];

export const SemanticAliases: StoryObj = {
  name: "Semantic Aliases",
  render: () => (
    <div style={{ padding: "40px 48px", maxWidth: 640, fontFamily: "Inter, system-ui, sans-serif" }}>
      {aliasGroups.map(({ label, keys }) => (
        <div key={label} style={{ marginBottom: 48 }}>
          <div style={{ ...LABEL, marginBottom: 16 }}>{label}</div>

          {/* Column headers */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "180px 1fr 48px",
              gap: "0 16px",
              padding: "6px 0",
              borderBottom: "2px solid #E5E7EB",
              marginBottom: 0,
            }}
          >
            {["Token", "Preview", "px"].map((h) => (
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

          {keys.map((key) => {
            const px = space[key];
            return (
              <div
                key={key}
                style={{
                  display: "grid",
                  gridTemplateColumns: "180px 1fr 48px",
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

                <div
                  style={{
                    width: Math.max(px, 2),
                    height: 16,
                    background: "#7C3AED",
                    borderRadius: 3,
                    opacity: 0.2 + Math.min(px / 96, 0.8),
                  }}
                />

                <span style={{ ...MONO }}>{px}</span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  ),
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story:
          "Named semantic aliases. Prefer these over raw `spacing[n]` values in component code — they communicate intent.",
      },
    },
  },
};

// ─── Grid visualiser ─────────────────────────────────────────────────────────

export const GridVisualiser: StoryObj = {
  name: "Grid Visualiser",
  render: () => {
    const steps = scaleEntries.filter(([, px]) => px > 0 && px <= 64);
    return (
      <div style={{ padding: "40px 48px", fontFamily: "Inter, system-ui, sans-serif" }}>
        <div style={{ ...LABEL, marginBottom: 24 }}>Spacing grid (up to 64 px)</div>
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 24 }}>
          {steps.map(([key, px]) => (
            <div key={key} style={{ display: "flex", alignItems: "center", gap: 20 }}>
              {/* Token label */}
              <span style={{ ...MONO, width: 36, textAlign: "right", flexShrink: 0 }}>{key}</span>

              {/* Square swatch whose side === the spacing value */}
              <div
                style={{
                  width: px,
                  height: px,
                  background: "#7C3AED",
                  borderRadius: 3,
                  opacity: 0.15 + Math.min(px / 64, 0.85),
                  flexShrink: 0,
                }}
              />

              {/* Pixel label */}
              <span style={{ ...MONO }}>{px}px</span>
            </div>
          ))}
        </div>
      </div>
    );
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story:
          "Each token shown as a square whose side length equals the spacing value, making relative sizes immediately tangible.",
      },
    },
  },
};
