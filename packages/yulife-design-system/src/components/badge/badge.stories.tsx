import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Badge } from "./badge";
import { SurgeColourIcon, StreakColourIcon, WeeklyColourIcon } from "../../icons";
import { palette } from "../../tokens/colors";

// ─── Meta ──────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Badge> = {
  title: "Feedback/Badge",
  component: Badge,
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#2D2D2D" }],
    },
  },
  argTypes: {
    color: { control: "color" },
    bubble: { control: "text" },
    label: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// ─── All variants side-by-side ────────────────────────────────────────────────

/** All badge variants shown together for quick visual comparison. */
export const AllVariants: Story = {
  name: "All variants",
  render: () => (
    <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "flex-start", padding: 24 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <Badge
          icon={<SurgeColourIcon size={24} />}
          label="43m"
          color={palette.purple600}
          bubble="8x"
          accessibilityLabel="Surge with bubble"
        />
        <span style={{ color: palette.neutralWhite, fontSize: 11, fontFamily: "sans-serif" }}>Surge + bubble</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <Badge
          icon={<SurgeColourIcon size={24} />}
          label="43m"
          color={palette.purple600}
          accessibilityLabel="Surge no bubble"
        />
        <span style={{ color: palette.neutralWhite, fontSize: 11, fontFamily: "sans-serif" }}>Surge</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <Badge
          icon={<StreakColourIcon size={24} />}
          label="1/5"
          color={palette.pink600}
          accessibilityLabel="Streak enabled"
        />
        <span style={{ color: palette.neutralWhite, fontSize: 11, fontFamily: "sans-serif" }}>Streak</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <Badge
          icon={<StreakColourIcon size={24} />}
          label="1/5"
          color={palette.pink300}
          accessibilityLabel="Streak disabled"
        />
        <span style={{ color: palette.neutralWhite, fontSize: 11, fontFamily: "sans-serif" }}>Streak (off)</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <Badge
          icon={<WeeklyColourIcon size={24} />}
          label="5d"
          color={palette.pink600}
          accessibilityLabel="Quest default"
        />
        <span style={{ color: palette.neutralWhite, fontSize: 11, fontFamily: "sans-serif" }}>Quest</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <Badge
          icon={<WeeklyColourIcon size={24} />}
          label="21h"
          color={palette.pink600}
          bubble="1"
          accessibilityLabel="Quest claimable"
        />
        <span style={{ color: palette.neutralWhite, fontSize: 11, fontFamily: "sans-serif" }}>Quest (claim)</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <Badge
          icon={<WeeklyColourIcon size={24} />}
          label="Done"
          color={palette.pink300}
          accessibilityLabel="Quest done"
        />
        <span style={{ color: palette.neutralWhite, fontSize: 11, fontFamily: "sans-serif" }}>Quest (done)</span>
      </div>
    </div>
  ),
};

// ─── Quest — claimable ────────────────────────────────────────────────────────

/** Quest badge — claimable state with a bubble showing the number of completions. */
export const QuestClaimable: Story = {
  name: "Quest — claimable",
  args: {
    icon: <WeeklyColourIcon size={24} />,
    label: "21h",
    color: palette.pink600,
    bubble: "1",
    accessibilityLabel: "Quest: 1 quest claimable, 21 hours remaining",
  },
};

// ─── Quest — default ──────────────────────────────────────────────────────────

/** Quest badge — default state, showing time remaining. */
export const QuestDefault: Story = {
  name: "Quest — default",
  args: {
    icon: <WeeklyColourIcon size={24} />,
    label: "5d",
    color: palette.pink600,
    accessibilityLabel: "Quest: 5 days remaining",
  },
};

// ─── Quest — done ─────────────────────────────────────────────────────────────

/** Quest badge — done state shown with a muted colour. */
export const QuestDone: Story = {
  name: "Quest — done",
  args: {
    icon: <WeeklyColourIcon size={24} />,
    label: "Done",
    color: palette.pink300,
    accessibilityLabel: "Quest: completed",
  },
};

// ─── Streak — disabled ────────────────────────────────────────────────────────

/** Streak badge — disabled/done state shown with a muted colour. */
export const StreakDisabled: Story = {
  name: "Streak — disabled",
  args: {
    icon: <StreakColourIcon size={24} />,
    label: "1/5",
    color: palette.pink300,
    accessibilityLabel: "Streak: 1 of 5 completed (inactive)",
  },
};

// ─── Streak — enabled ─────────────────────────────────────────────────────────

/** Streak badge — active state (pink). */
export const StreakEnabled: Story = {
  name: "Streak — enabled",
  args: {
    icon: <StreakColourIcon size={24} />,
    label: "1/5",
    color: palette.pink600,
    accessibilityLabel: "Streak: 1 of 5 completed",
  },
};

// ─── Surge — no bubble ────────────────────────────────────────────────────────

/** Surge badge without a bubble — shows a plain ellipse body. */
export const SurgeNoBubble: Story = {
  name: "Surge — no bubble",
  args: {
    icon: <SurgeColourIcon size={24} />,
    label: "43m",
    color: palette.purple600,
    accessibilityLabel: "Surge: 43 minutes remaining",
  },
};

// ─── Surge — with bubble ──────────────────────────────────────────────────────

/** Surge badge with the 8x multiplier bubble — the main variant used in YuCoinScreen. */
export const SurgeWithBubble: Story = {
  name: "Surge — with bubble",
  args: {
    icon: <SurgeColourIcon size={24} />,
    label: "43m",
    color: palette.purple600,
    bubble: "8x",
    accessibilityLabel: "Surge: 8x multiplier, 43 minutes remaining",
  },
};
