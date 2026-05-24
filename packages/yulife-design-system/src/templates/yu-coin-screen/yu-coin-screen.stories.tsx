import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { YuCoinScreen, type YuCoinScreenProps } from "./yu-coin-screen";
import { gameBackgrounds } from "../../assets/game-backgrounds";

const DEFAULT_BACKGROUND_KEY = "Bright / Forest / —" as const;

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<YuCoinScreenProps> = {
  title: "Templates/YuCoinScreen",
  component: YuCoinScreen,
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "iphone15" },
    docs: {
      description: {
        component: `
## YuCoin Screen Template

The **YuCoin Screen** (Today Screen) is the primary landing screen for the YuLife app.
It brings together the \`NavigationHeader\` and \`ActionBar\` design-system components with
the illustrated YuCoin world — allowing users to see today's earnings, activity stats,
and jump into challenges.

### What's included

| Area | Component |
|------|-----------|
| Top navigation | \`NavigationHeader\` — hamburger, YuLife logo, YuCoin balance |
| Notification | Bell icon (with optional unread dot) |
| Surge badge | Floating top-right streak badge with 0/N counter |
| YuCoin graphic | Three-layer coin composite (body, clasps, engraving) |
| Daily summary | Heading + steps / distance / minutes activity row |
| Challenge CTA | Primary pink pill button |
| Bottom nav | \`ActionBar\` — YuCoin, Quests, Yu, Leaderboard, Rewards |
| Background | Forest illustration |

### Figma reference

[YuLife App — Login Spec, node 28:15936](https://www.figma.com/design/4tvQWEu6I2nmPKK8eSVtOM/YuLife-App---Login--Spec-?node-id=28-15936)
        `.trim(),
      },
    },
  },
  argTypes: {
    yuCoinBalance: {
      control: { type: "number" },
      description: "YuCoin balance shown in the navigation header.",
    },
    yuCoinToday: {
      control: { type: "number" },
      description: "YuCoins available to earn today.",
    },
    ctaLabel: {
      control: "text",
      description: "Label for the call-to-action button.",
    },
    surgeCompleted: {
      control: { type: "number", min: 0, max: 10 },
      description: "Surge challenges completed today.",
    },
    surgeTotal: {
      control: { type: "number", min: 1, max: 10 },
      description: "Total surge challenges available today.",
    },
    hasNotification: {
      control: "boolean",
      description: "Show an unread dot on the notification bell.",
    },
    activeTabId: {
      control: "select",
      options: ["yucoin", "quests", "yu", "leaderboard", "rewards"],
      description: "Active navigation tab.",
    },
    activity: { control: "object" },
    background: {
      control: "select",
      options: Object.keys(gameBackgrounds),
      mapping: gameBackgrounds,
      description: "Background illustration. Choose any planet / world combination.",
    },
  },
};

export default meta;
type Story = StoryObj<YuCoinScreenProps>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/**
 * Default state — fresh day, no activity recorded yet. The YuCoin tab is
 * active and the CTA prompts the user to take their first challenge.
 */
export const Default: Story = {
  args: {
    yuCoinBalance: 400,
    yuCoinToday: 200,
    activity: { steps: 0, distanceKm: 0, minutes: 0 },
    ctaLabel: "Take a challenge (1 left)",
    surgeCompleted: 0,
    surgeTotal: 5,
    hasNotification: false,
    activeTabId: "yucoin",
    background: DEFAULT_BACKGROUND_KEY,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Default state matching the Figma spec — zero activity, 400 YuCoin balance, " + "one challenge available.",
      },
    },
  },
};

/**
 * Mid-day state — the user has recorded some activity and earned coins.
 */
export const ActiveDay: Story = {
  args: {
    yuCoinBalance: 1250,
    yuCoinToday: 350,
    activity: { steps: 4823, distanceKm: 3.2, minutes: 28 },
    ctaLabel: "Take another challenge",
    surgeCompleted: 2,
    surgeTotal: 5,
    hasNotification: true,
    activeTabId: "yucoin",
    background: DEFAULT_BACKGROUND_KEY,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Mid-day state with partial activity, earned coins, a notification dot, " +
          "and the surge widget showing 2 of 5 challenges done.",
      },
    },
  },
};

/**
 * Full day — all challenges completed, maximum coins earned.
 */
export const FullDay: Story = {
  args: {
    yuCoinBalance: 3400,
    yuCoinToday: 200,
    activity: { steps: 10432, distanceKm: 7.8, minutes: 60 },
    ctaLabel: "All challenges complete!",
    surgeCompleted: 5,
    surgeTotal: 5,
    hasNotification: false,
    activeTabId: "yucoin",
    background: DEFAULT_BACKGROUND_KEY,
  },
  parameters: {
    docs: {
      description: {
        story: "End-of-day state — all 5 surge challenges done and maximum daily coins earned.",
      },
    },
  },
};

/**
 * Fully interactive — tabs switch and the CTA is clickable.
 */
export const Interactive: Story = {
  render: () => {
    const [activeTabId, setActiveTabId] = useState("yucoin");

    return (
      <YuCoinScreen
        yuCoinBalance={400}
        yuCoinToday={200}
        activity={{ steps: 0, distanceKm: 0, minutes: 0 }}
        ctaLabel="Take a challenge (1 left)"
        surgeCompleted={0}
        surgeTotal={5}
        hasNotification={false}
        activeTabId={activeTabId}
        onTabPress={setActiveTabId}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Fully interactive story. Click the bottom nav tabs to switch sections. " +
          "The CTA button fires an alert on press.",
      },
    },
  },
};
