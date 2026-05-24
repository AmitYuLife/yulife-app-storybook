import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { duration, easing } from "./animation";
import type { DurationKey, EasingKey } from "./animation";
import { colors } from "./colors";
import { ModalTemplate } from "../templates/modal-template";
import { Button, ButtonGroup } from "../components/button";
import { Card, CardInfoContent } from "../components/card";

const meta: Meta = {
  title: "Foundations/Animation",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Animation

Shared duration and easing tokens used across all animated components.

Tokens are defined in \`src/tokens/animation.ts\` and consumed via:

\`\`\`ts
import { duration, easing } from "@/tokens/animation";

// Panel entering the screen
transition: \`transform \${duration.slow}ms \${easing.enter}\`

// Overlay fading in
transition: \`opacity \${duration.normal}ms \${easing.default}\`

// Button press response
transition: \`transform \${duration.fast}ms \${easing.spring}\`
\`\`\`

### Modal / Toast pattern

The same enter/exit animation is shared between **ModalTemplate** (bottom sheet) and **InlineBanner** (toast):

| Phase | Property | Duration | Easing |
|-------|----------|----------|--------|
| Enter | \`transform\` | \`slow\` (${duration.slow} ms) | \`enter\` |
| Enter | \`opacity\` | \`normal\` (${duration.normal} ms) | \`default\` |
| Exit  | \`transform\` | \`exit\` (${duration.exit} ms) | \`exit\` |
        `,
      },
    },
  },
};

export default meta;

// ─── Shared styles ────────────────────────────────────────────────────────────

const LABEL: React.CSSProperties = {
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "#9CA3AF",
};

const MONO: React.CSSProperties = {
  fontFamily: "monospace",
  fontSize: 11,
  color: "#6B7280",
};

const CODE: React.CSSProperties = {
  background: "#F3F4F6",
  padding: "2px 7px",
  borderRadius: 4,
  fontFamily: "monospace",
  fontSize: 11,
  color: "#374151",
};

// ─── Durations story ──────────────────────────────────────────────────────────

type DurationEntry = { key: DurationKey; value: number; description: string };

const durationEntries: DurationEntry[] = [
  { key: "fast", value: duration.fast, description: "Micro-interactions — button press, toggle flip" },
  { key: "exit", value: duration.exit, description: "Exit transitions — panel leaves, element removes" },
  { key: "normal", value: duration.normal, description: "Overlay fade-in, short state changes" },
  { key: "slow", value: duration.slow, description: "Primary enter transitions — panel slides in, sheet rises" },
];

export const Durations: StoryObj = {
  name: "Durations",
  render: () => (
    <div style={{ padding: "40px 48px", fontFamily: "Inter, system-ui, sans-serif", minWidth: 560 }}>
      <div style={{ ...LABEL, marginBottom: 24 }}>Duration scale</div>

      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "80px 64px 1fr 120px",
            gap: "0 16px",
            padding: "6px 0",
            borderBottom: "2px solid #E5E7EB",
          }}
        >
          {["Token", "Value", "Usage", ""].map((h) => (
            <span key={h} style={LABEL}>
              {h}
            </span>
          ))}
        </div>

        {durationEntries.map(({ key, value, description }) => (
          <div
            key={key}
            style={{
              display: "grid",
              gridTemplateColumns: "80px 64px 1fr 120px",
              gap: "0 16px",
              alignItems: "center",
              padding: "14px 0",
              borderBottom: "1px solid #F3F4F6",
            }}
          >
            <code style={CODE}>{key}</code>
            <span style={MONO}>{value} ms</span>
            <span style={{ fontSize: 12, color: "#6B7280" }}>{description}</span>
            {/* Live bar animation */}
            <DurationBar durationMs={value} />
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "All four duration tokens. The bar on the right animates at the token's duration so you can feel the difference between speeds.",
      },
    },
  },
};

const DurationBar = ({ durationMs }: { durationMs: number }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      style={{
        position: "relative",
        height: 8,
        borderRadius: 4,
        background: "#F3F4F6",
        overflow: "hidden",
        cursor: "pointer",
      }}
      title="Click to replay"
      onClick={() => {
        setActive(false);
        setTimeout(() => setActive(true), 16);
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 4,
          background: "linear-gradient(90deg, #7C3AED, #EC4899)",
          transform: active ? "translateX(0)" : "translateX(-100%)",
          transition: active ? `transform ${durationMs}ms ease` : "none",
        }}
      />
    </div>
  );
};

// ─── Easing story ─────────────────────────────────────────────────────────────

type EasingEntry = { key: EasingKey; value: string; description: string };

const easingEntries: EasingEntry[] = [
  { key: "enter", value: easing.enter, description: "Fast-start deceleration — element snaps into position" },
  { key: "exit", value: easing.exit, description: "Acceleration — element lingers then picks up speed leaving" },
  { key: "default", value: easing.default, description: "General-purpose — fades and state changes" },
  { key: "spring", value: easing.spring, description: "Release / snap-back — dragged element returns" },
];

export const Easing: StoryObj = {
  name: "Easing",
  render: () => (
    <div style={{ padding: "40px 48px", fontFamily: "Inter, system-ui, sans-serif", minWidth: 560 }}>
      <div style={{ ...LABEL, marginBottom: 24 }}>Easing curves</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {easingEntries.map(({ key, value, description }) => (
          <EasingDemo key={key} tokenKey={key} value={value} description={description} />
        ))}
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "Hover any row to play the easing curve at 350 ms so differences are clearly visible." },
    },
  },
};

const EasingDemo = ({ tokenKey, value, description }: { tokenKey: string; value: string; description: string }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      style={{ display: "flex", alignItems: "center", gap: 24, cursor: "pointer" }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={() => {
        setActive(false);
        setTimeout(() => setActive(true), 16);
      }}
    >
      {/* Track */}
      <div
        style={{
          position: "relative",
          width: 200,
          height: 32,
          background: "#F9FAFB",
          borderRadius: 8,
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            width: 24,
            borderRadius: 6,
            background: "linear-gradient(135deg, #7C3AED, #EC4899)",
            left: active ? "calc(100% - 28px)" : 4,
            transition: active ? `left ${duration.slow}ms ${value}` : "none",
          }}
        />
      </div>

      {/* Labels */}
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <code style={CODE}>{tokenKey}</code>
        <span style={{ ...MONO, fontSize: 10 }}>{value}</span>
        <span style={{ fontSize: 11, color: "#9CA3AF" }}>{description}</span>
      </div>
    </div>
  );
};

// ─── Modal / Toast pattern story ──────────────────────────────────────────────

export const ModalPattern: StoryObj = {
  name: "Modal / Toast Pattern",
  render: () => <ModalPatternDemo />,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story: `
The enter/exit animation pattern shared by **ModalTemplate** and **InlineBanner** (toast mode).

- **Enter**: overlay fades in at \`normal\` duration (${duration.normal} ms, \`default\` easing), panel slides up at \`slow\` duration (${duration.slow} ms, \`enter\` easing).
- **Exit**: panel slides down at \`exit\` duration (${duration.exit} ms, \`exit\` easing), overlay disappears once complete.
        `,
      },
    },
  },
};

const ModalPatternDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: colors.bgBase,
      }}
    >
      <Button colour="Primary" variant="Solid" size="Large" onClick={open}>
        Open modal
      </Button>

      <ModalTemplate
        isOpen={isOpen}
        onClose={close}
        footer={
          <ButtonGroup pinned={true}>
            <Button colour="Primary" variant="Solid" size="Large" onClick={close}>
              Confirm
            </Button>
            <Button colour="Primary" variant="Outline" size="Large" onClick={close}>
              Cancel
            </Button>
          </ButtonGroup>
        }
      >
        <Card>
          <CardInfoContent title="Enter animation" description={`${duration.slow} ms · ${easing.enter}`} />
        </Card>
        <Card>
          <CardInfoContent title="Exit animation" description={`${duration.exit} ms · ${easing.exit}`} />
        </Card>
      </ModalTemplate>
    </div>
  );
};
