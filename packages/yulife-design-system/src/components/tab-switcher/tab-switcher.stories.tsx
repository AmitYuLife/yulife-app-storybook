import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { TabSwitcher } from "./tab-switcher";
import { NavigationHeader } from "../navigation-header";
import { Icon } from "../../icons/icon";
import HamburgerIcon from "../../icons/svg/Hamburger.svg?react";
import { colors } from "../../tokens";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof TabSwitcher> = {
  title: "Navigation/TabSwitcher",
  component: TabSwitcher,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
The \`TabSwitcher\` is a horizontal tab bar used below the \`NavigationHeader\` to split page
content into named sections.

- A full-width 1px separator sits at the bottom of the bar.
- The active tab label renders in **pink** (\`colors.actionPrimaryHover\`) with a 2px rounded
  underline indicator.
- Inactive tab labels render in **grey** (\`colors.textDisabled\`).
- Typography: \`textStyles.body1Bold\` (Bariol Bold, 20px).

This is a **controlled** component — the parent owns \`activeIndex\` and handles \`onTabChange\`.

Figma: [Navigation / Tab Switcher](https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=4542-45362)
        `.trim(),
      },
    },
  },
  argTypes: {
    tabs: { control: false },
    activeIndex: { control: { type: "number", min: 0 } },
    onTabChange: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof TabSwitcher>;

// ─── Default — 3 tabs, first active (mirrors Figma) ──────────────────────────

/**
 * The canonical three-tab layout matching the Figma reference exactly:
 * first tab active, two inactive tabs to the right.
 */
export const Default: Story = {
  args: {
    tabs: ["Tab name", "Tab name", "Tab name"],
    activeIndex: 0,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Three-tab layout matching the Figma reference. First tab active with pink " +
          "underline indicator; remaining tabs render in grey.",
      },
    },
  },
};

// ─── Second tab active ────────────────────────────────────────────────────────

/**
 * Demonstrates the active indicator tracking a middle tab.
 */
export const SecondTabActive: Story = {
  args: {
    tabs: ["Tab name", "Tab name", "Tab name"],
    activeIndex: 1,
  },
  parameters: {
    docs: {
      description: {
        story: "Active indicator on the second tab — confirms the indicator tracks any index.",
      },
    },
  },
};

// ─── Two tabs ─────────────────────────────────────────────────────────────────

/**
 * Minimal two-tab variant — the most common pairing for binary content splits.
 */
export const TwoTabs: Story = {
  args: {
    tabs: ["Overview", "Activity"],
    activeIndex: 0,
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal two-tab variant — the most common use case for binary content splits.",
      },
    },
  },
};

// ─── Real labels ─────────────────────────────────────────────────────────────

/**
 * Four tabs with realistic content labels from the YuLife app.
 */
export const RealLabels: Story = {
  args: {
    tabs: ["Steps", "Nutrition", "Sleep", "Mindfulness"],
    activeIndex: 0,
  },
  parameters: {
    docs: {
      description: {
        story: "Realistic tab labels from the YuLife app to verify layout with variable text lengths.",
      },
    },
  },
};

// ─── Interactive ──────────────────────────────────────────────────────────────

/**
 * Live-switching demo — click any tab to move the active indicator.
 * Uses local `useState` to simulate how a parent page would control the component.
 */
export const Interactive: Story = {
  render: () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
      <TabSwitcher tabs={["Overview", "Activity", "Rewards"]} activeIndex={activeIndex} onTabChange={setActiveIndex} />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Click any tab to see the active indicator move. Demonstrates controlled usage " +
          "with local `useState` — in a real screen the parent page manages this state.",
      },
    },
  },
};

// ─── With NavigationHeader ────────────────────────────────────────────────────

/**
 * The most common in-app composition: TabSwitcher rendered directly below a
 * NavigationHeader with a white background, showing the intended visual pairing.
 *
 * Note: the TabSwitcher sits in the page body rather than inside `subNavSlot`
 * because the NavigationHeader's sub-nav strip is only 8px tall. The tab bar
 * is placed immediately below the header at the top of the scrollable content area.
 */
export const WithNavigationHeader: Story = {
  render: () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
      <div style={{ position: "relative", minHeight: 160 }}>
        <NavigationHeader
          background={true}
          shadow={true}
          showStatusBar={false}
          leftSlot={<Icon svg={HamburgerIcon} size={24} color={colors.textPrimary} accessibilityLabel="Open menu" />}
          style={{ position: "relative" }}
        />
        <div
          style={{
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          <TabSwitcher
            tabs={["Overview", "Activity", "Rewards"]}
            activeIndex={activeIndex}
            onTabChange={setActiveIndex}
          />
        </div>
      </div>
    );
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story:
          "Typical page composition: `TabSwitcher` rendered below a white `NavigationHeader` " +
          "with a bottom shadow. The tab bar sits in the page body with standard horizontal " +
          "padding, immediately below the header — the intended in-app usage.",
      },
    },
  },
};
