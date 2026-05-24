import React from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { palette, colors } from "./colors";
import type { PaletteKey, SemanticKey } from "./colors";

const meta: Meta = {
  title: "Foundations/Colours",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Colour system

Two-layer colour architecture:

**Palette** — raw named values sourced from the [Brand — Foundations](https://www.figma.com/design/Ac90Diav91cBdIGET9uCXs/Brand---Foundations) Figma file (Primitives collection). Do not reference palette tokens in component code; always use semantic tokens.

**Semantic tokens** — purpose-driven aliases (text, background, border, action,
feedback). These are the tokens components should consume.

### Usage

\`\`\`ts
import { colors } from "@/tokens/colors";

<View style={{ backgroundColor: colors.bgSurface }}>
  <Text style={{ color: colors.textPrimary }}>Hello</Text>
</View>
\`\`\`
        `,
      },
    },
  },
};

export default meta;

// ─── Helpers ─────────────────────────────────────────────────────────────────

function toRgbChannels(value: string): [number, number, number] | null {
  const hex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);
  if (hex) {
    return [parseInt(hex[1], 16), parseInt(hex[2], 16), parseInt(hex[3], 16)];
  }

  const rgba = /rgba?\(\s*(\d+),\s*(\d+),\s*(\d+)/.exec(value);
  if (rgba) {
    return [Number(rgba[1]), Number(rgba[2]), Number(rgba[3])];
  }

  return null;
}

function luminance(value: string) {
  const rgb = toRgbChannels(value);
  if (!rgb) {
    return 1;
  }

  const [r, g, b] = rgb.map((c) => {
    const n = c / 255;
    return n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.0722 * b + 0.0722 * g;
}

function isDark(value: string) {
  return luminance(value) < 0.35;
}

// ─── Palette story ────────────────────────────────────────────────────────────

type PaletteGroup = {
  label: string;
  keys: PaletteKey[];
};

const paletteGroups: PaletteGroup[] = [
  {
    label: "Neutral",
    keys: [
      "neutralWhite",
      "neutral50",
      "neutral100",
      "neutral200",
      "neutral300",
      "neutral400",
      "neutral500",
      "neutral600",
      "neutral700",
      "neutralBlack",
    ],
  },
  {
    label: "Pink",
    keys: ["pink100", "pink200", "pink300", "pink400", "pink500", "pink600", "pink700", "pink800", "pink900"],
  },
  {
    label: "Green",
    keys: ["green100", "green200", "green300", "green400", "green500", "green600"],
  },
  {
    label: "Blue",
    keys: ["blue100", "blue200", "blue300", "blue400", "blue500", "blue600"],
  },
  {
    label: "Purple",
    keys: [
      "purple100",
      "purple200",
      "purple300",
      "purple400",
      "purple500",
      "purple600",
      "purple700",
      "purple800",
      "purple900",
    ],
  },
  {
    label: "Yellow",
    keys: ["yellow100", "yellow200", "yellow300", "yellow400", "yellow500", "yellow600"],
  },
  {
    label: "Pine",
    keys: ["pine100", "pine200", "pine300", "pine400", "pine500", "pine600", "pine700", "pine800", "pine900"],
  },
  {
    label: "Indigo",
    keys: [
      "indigo100",
      "indigo200",
      "indigo300",
      "indigo400",
      "indigo500",
      "indigo600",
      "indigo700",
      "indigo800",
      "indigo900",
    ],
  },
  {
    label: "Gold",
    keys: [
      "gold100",
      "gold200",
      "gold300",
      "gold400",
      "gold500",
      "gold600",
      "gold700",
      "gold800",
      "gold850",
      "gold900",
    ],
  },
  {
    label: "Violet",
    keys: [
      "violet100",
      "violet200",
      "violet300",
      "violet400",
      "violet500",
      "violet600",
      "violet700",
      "violet800",
      "violet900",
    ],
  },
  {
    label: "Orange",
    keys: [
      "orange100",
      "orange200",
      "orange300",
      "orange400",
      "orange500",
      "orange600",
      "orange700",
      "orange800",
      "orange900",
    ],
  },
  {
    label: "Teal",
    keys: ["teal100", "teal200", "teal300", "teal400", "teal500", "teal600", "teal700", "teal800", "teal900"],
  },
  {
    label: "Red",
    keys: ["red100", "red200", "red300", "red400", "red500", "red600", "red700", "red800", "red900"],
  },
  {
    label: "Transparent",
    keys: ["transBlack", "transWhite"],
  },
  {
    label: "Misc",
    keys: [
      "miscBurgundy",
      "miscErrorLight",
      "miscErrorDark",
      "miscWarningLight",
      "miscWarningDark",
      "miscSuccessLight",
      "miscSuccessDark",
      "miscInfoLight",
      "miscInfoDark",
    ],
  },
];

export const Palette: StoryObj = {
  name: "Palette",
  render: () => (
    <div style={{ padding: 24, fontFamily: "Inter, system-ui, sans-serif" }}>
      {paletteGroups.map(({ label, keys }) => (
        <div key={label} style={{ marginBottom: 40 }}>
          <h3
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#6B7280",
              marginBottom: 12,
            }}
          >
            {label}
          </h3>
          <div
            style={{
              display: "flex",
              gap: 0,
              borderRadius: 10,
              overflow: "hidden",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            }}
          >
            {keys.map((key) => {
              const value = palette[key];
              const dark = isDark(value);
              return (
                <div
                  key={key}
                  title={`${key}: ${value}`}
                  style={{
                    flex: 1,
                    height: 72,
                    background: value,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "6px 5px",
                    minWidth: 0,
                  }}
                >
                  <span
                    style={{
                      fontSize: 9,
                      fontWeight: 600,
                      color: dark ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.55)",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {key}
                  </span>
                  <span
                    style={{
                      fontSize: 8,
                      color: dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.35)",
                      fontFamily: "monospace",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story: "The raw colour palette. Do not use these directly in component code — use semantic tokens instead.",
      },
    },
  },
};

// ─── Semantic tokens story ────────────────────────────────────────────────────

type SemanticGroup = {
  label: string;
  keys: SemanticKey[];
};

const semanticGroups: SemanticGroup[] = [
  {
    label: "Text",
    keys: ["textPrimary", "textSecondary", "textDisabled", "textInverse", "textLink", "textDanger"],
  },
  {
    label: "Backgrounds",
    keys: ["bgBase", "bgSurface", "bgElevated", "bgOverlay", "bgDisabled"],
  },
  {
    label: "Borders",
    keys: ["borderDefault", "borderFocused", "borderDanger"],
  },
  {
    label: "Action — Primary",
    keys: ["actionPrimary", "actionPrimaryHover", "actionPrimaryPressed", "actionPrimaryText"],
  },
  {
    label: "Action — Secondary",
    keys: ["actionSecondary", "actionSecondaryBorder", "actionSecondaryText"],
  },
  {
    label: "Action — Destructive",
    keys: ["actionDestructive", "actionDestructiveText"],
  },
  {
    label: "Feedback",
    keys: ["feedbackSuccess", "feedbackWarning", "feedbackDanger", "feedbackInfo"],
  },
  {
    label: "Status Surfaces",
    keys: ["successSurface", "warningSurface", "dangerSurface", "infoSurface"],
  },
];

export const SemanticTokens: StoryObj = {
  name: "Semantic Tokens",
  render: () => (
    <div style={{ padding: 24, fontFamily: "Inter, system-ui, sans-serif" }}>
      {semanticGroups.map(({ label, keys }) => (
        <div key={label} style={{ marginBottom: 40 }}>
          <h3
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#6B7280",
              marginBottom: 12,
            }}
          >
            {label}
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 10 }}>
            {keys.map((key) => {
              const value = colors[key];
              return (
                <div
                  key={key}
                  style={{
                    borderRadius: 8,
                    overflow: "hidden",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                    border: "1px solid #F0F0F0",
                  }}
                >
                  <div style={{ height: 56, background: value }} />
                  <div style={{ padding: "8px 10px", background: "#FAFAFA" }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#374151" }}>{key}</div>
                    <div style={{ fontSize: 11, color: "#9CA3AF", fontFamily: "monospace", marginTop: 2 }}>{value}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story: "Semantic colour tokens. Always reference these in component code, never raw palette values.",
      },
    },
  },
};
