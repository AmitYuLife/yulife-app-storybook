import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { TodaysYuCoinIcon, MapIcon, HeartIcon, TrophyIcon, ChestIcon } from "../../icons";
import { ActionBar } from "./action-bar";
import type { ActionBarItem } from "./action-bar";

// ─── Default nav items ────────────────────────────────────────────────────────

const DEFAULT_ITEMS: ActionBarItem[] = [
  {
    id: "yucoin",
    icon: MapIcon,
    label: "YuCoin",
    accessibilityLabel: "YuCoin",
  },
  {
    id: "quests",
    icon: TodaysYuCoinIcon,
    label: "Quests",
    accessibilityLabel: "Quests",
  },
  {
    id: "yu",
    icon: HeartIcon,
    label: "Yu",
    accessibilityLabel: "Yu",
  },
  {
    id: "leaderboard",
    icon: TrophyIcon,
    label: "Leaderboard",
    accessibilityLabel: "Leaderboard",
  },
  {
    id: "rewards",
    icon: ChestIcon,
    label: "Rewards",
    accessibilityLabel: "Rewards",
  },
];

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof ActionBar> = {
  title: "Navigation/ActionBar",
  component: ActionBar,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          height: "100vh",
          padding: "0 16px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "iphone15" },
    docs: {
      description: {
        component: `
## Action Bar

The floating action bar is the primary navigation component for top-level app screens.
It sits fixed at the bottom of the viewport and provides access to the five main
sections of the app.

Each item consists of a 24px icon from the [iconography set](?path=/story/foundations-iconography--gallery)
and a bold 10px label. Items support three states: **active**, **inactive**, and
**notification** (a pink dot on the icon indicating unread content).

### When to use

- On **top-level pages only** — the action bar should not appear inside nested views,
  modal sheets, or flows with a back action.
- Always render **all 5 items** so users can orient themselves within the app.

### Figma reference

[YuLife App Storybook — Action Bar](https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=9509-3583)
        `,
      },
    },
  },
  argTypes: {
    activeId: {
      control: "select",
      options: DEFAULT_ITEMS.map((i) => i.id),
      description: "The `id` of the currently active nav item.",
    },
  },
};

export default meta;

// ─── Stories ──────────────────────────────────────────────────────────────────

/**
 * The default state with the first tab (YuCoin) active and no notifications.
 */
export const Default: StoryObj<typeof ActionBar> = {
  args: {
    items: DEFAULT_ITEMS,
    activeId: "yucoin",
  },
  parameters: {
    docs: {
      description: {
        story: "Default configuration: YuCoin tab active, no notification dots.",
      },
    },
  },
};

/**
 * All items inactive — no `activeId` matches any item id.
 * Useful for verifying inactive styling in isolation.
 */
export const AllInactive: StoryObj<typeof ActionBar> = {
  args: {
    items: DEFAULT_ITEMS,
    activeId: "__none__",
  },
  parameters: {
    docs: {
      description: {
        story: "All items rendered in their inactive state. Useful for visual regression of the inactive colour.",
      },
    },
  },
};

/**
 * A notification dot appears on the Rewards tab, indicating unread content.
 */
export const WithNotification: StoryObj<typeof ActionBar> = {
  args: {
    items: DEFAULT_ITEMS.map((item) => ({
      ...item,
      showNotification: item.id === "rewards",
    })),
    activeId: "yucoin",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Notification dot on the Rewards tab. The dot uses the active (pink) colour with a white border to lift it off the icon.",
      },
    },
  },
};

/**
 * Notification dots on multiple tabs simultaneously.
 */
export const MultipleNotifications: StoryObj<typeof ActionBar> = {
  args: {
    items: DEFAULT_ITEMS.map((item) => ({
      ...item,
      showNotification: item.id === "rewards" || item.id === "quests",
    })),
    activeId: "yucoin",
  },
  parameters: {
    docs: {
      description: {
        story: "Multiple notification dots shown at the same time.",
      },
    },
  },
};

/**
 * Fully interactive — click the tabs to switch the active state.
 * The Rewards notification dot clears the first time that tab is visited.
 */
export const Interactive: StoryObj<typeof ActionBar> = {
  render: () => {
    const [activeId, setActiveId] = useState("yucoin");
    const [items, setItems] = useState(
      DEFAULT_ITEMS.map((item) => ({
        ...item,
        showNotification: item.id === "rewards",
      }))
    );

    const handlePress = (id: string) => {
      setActiveId(id);
      setItems((prev) => prev.map((item) => (item.id === id ? { ...item, showNotification: false } : item)));
    };

    return <ActionBar items={items} activeId={activeId} onPress={handlePress} />;
  },
  parameters: {
    docs: {
      description: {
        story:
          "Fully interactive story. Click tabs to switch the active item. The Rewards notification dot clears on first visit.",
      },
    },
  },
};
