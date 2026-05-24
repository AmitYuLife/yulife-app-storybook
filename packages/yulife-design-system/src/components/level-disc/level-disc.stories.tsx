import React from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { LevelDisc } from "./level-disc";
import type { LevelDiscState, LevelDiscType } from "./level-disc";

// ─── Avatar discovery ───────────────────────────────────────────────────────

function loadAssetContext(context: __WebpackModuleApi.RequireContext): Record<string, string> {
  const result: Record<string, string> = {};
  context.keys().forEach((key) => {
    const mod = context(key) as string | { default: string };
    result[key] = typeof mod === "string" ? mod : mod.default;
  });
  return result;
}

const firstAvatar = Object.values(loadAssetContext(require.context("../../assets/avatars", false, /\.png$/)))[0] ?? "";

// ─── Meta ───────────────────────────────────────────────────────────────────

const meta: Meta<typeof LevelDisc> = {
  title: "Layout/LevelDisc",
  component: LevelDisc,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Level Disc

Interactive button representing a single level on the quest map pathway.
Each disc is a 64×64 px hit area containing a 56×56 circular disc with a
4 px drop shadow that disappears on press.

| Property       | Values |
|----------------|--------|
| **State**      | Active · Locked · Completed · Yuniversal |
| **Type**       | Level · Countdown · Chest |
| **Pressed**    | Off · On |
| **Icon Badge** | None · Gift Box |
| **Yumoji Pin** | None · Avatar image |

Level Discs must be aligned to the absolute centre of their respective
Placemat within the Pathway component.
        `.trim(),
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LevelDisc>;

// ─── Variant grid ───────────────────────────────────────────────────────────

const STATES: LevelDiscState[] = ["active", "locked", "completed", "yuniversal"];
const TYPES: LevelDiscType[] = ["level", "countdown", "chest"];

const AllVariantsGrid: React.FC = () => (
  <div
    style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      padding: "32px 24px",
      backgroundColor: "#fafafa",
      minHeight: "100vh",
    }}
  >
    <h2 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 700, color: "#111827" }}>Level Disc Variants</h2>
    <p style={{ margin: "0 0 32px", fontSize: 13, color: "#6b7280" }}>
      All state × type combinations — Pressed Off (left) and Pressed On (right)
    </p>

    {STATES.map((state) => (
      <section key={state} style={{ marginBottom: 48 }}>
        <h3
          style={{
            margin: "0 0 16px",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#9ca3af",
          }}
        >
          State: {state}
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>
          {TYPES.filter((type) => {
            if (state === "completed" && type !== "level") {
              return false;
            }

            if (state === "yuniversal" && type !== "chest") {
              return false;
            }

            return true;
          }).map((type) => (
            <div key={type} style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: "#6b7280",
                  textTransform: "capitalize",
                }}
              >
                {type}
              </span>
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <LevelDisc state={state} type={type} label="1" pressed={false} />
                <LevelDisc state={state} type={type} label="1" pressed={true} />
              </div>
            </div>
          ))}
        </div>
      </section>
    ))}
  </div>
);

export const AllVariants: Story = {
  render: () => <AllVariantsGrid />,
  name: "All Variants",
};

// ─── Individual stories ─────────────────────────────────────────────────────

export const ActiveLevel: Story = {
  args: { state: "active", type: "level", label: "5" },
  name: "Active / Level",
};

export const LockedLevel: Story = {
  args: { state: "locked", type: "level", label: "12" },
  name: "Locked / Level",
};

export const ActiveCountdown: Story = {
  args: { state: "active", type: "countdown", countdown: "02:15:30" },
  name: "Active / Countdown",
};

export const LockedCountdown: Story = {
  args: { state: "locked", type: "countdown", countdown: "08:09:29" },
  name: "Locked / Countdown",
};

export const ActiveChest: Story = {
  args: { state: "active", type: "chest" },
  name: "Active / Chest",
};

export const LockedChest: Story = {
  args: { state: "locked", type: "chest" },
  name: "Locked / Chest",
};

export const YuniversalChest: Story = {
  args: { state: "yuniversal", type: "chest" },
  name: "Yuniversal / Chest",
};

export const CompletedLevel: Story = {
  args: { state: "completed", type: "level", label: "3" },
  name: "Completed / Level",
};

export const WithRewardBadge: Story = {
  args: { state: "active", type: "level", label: "7", iconBadge: true },
  name: "With Reward Badge",
};

export const WithYumojiPin: Story = {
  render: () => (
    <div style={{ paddingTop: 64, display: "flex", justifyContent: "center" }}>
      <LevelDisc state="active" type="level" label="1" yumojiPin={{ src: firstAvatar, alt: "Player avatar" }} />
    </div>
  ),
  name: "With Yumoji Pin",
};
