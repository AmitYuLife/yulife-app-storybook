import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { NavigationHeader } from "./navigation-header";
import { Icon } from "../../icons/icon";
import HamburgerIcon from "../../icons/svg/Hamburger.svg?react";
import CloseIcon from "../../icons/svg/Close.svg?react";
import LeftIcon from "../../icons/svg/Left.svg?react";
import SettingsGearIcon from "../../icons/svg/SettingsGear.svg?react";
import { colors, textStyles } from "../../tokens";
import { YuCoinValue } from "../yu-coin-value";

// ─── Shared slot elements ──────────────────────────────────────────────────────

const HamburgerLeft = <Icon svg={HamburgerIcon} size={24} color={colors.textPrimary} accessibilityLabel="Open menu" />;

const HamburgerLeftDark = (
  <Icon svg={HamburgerIcon} size={24} color={colors.textInverse} accessibilityLabel="Open menu" />
);

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof NavigationHeader> = {
  title: "Navigation/NavigationHeader",
  component: NavigationHeader,
  parameters: {
    // fullscreen so position:fixed renders correctly against the story canvas
    layout: "fullscreen",
    docs: {
      description: {
        component: `
The \`NavigationHeader\` is a mobile navigation header that is always **fixed to the
top of the screen** (\`position: fixed; top: 0; left: 0; z-index: 100\`). It is sized
at 375 px wide to match the standard YuLife mobile prototype frame.

It stacks three layers:

1. **Status bar** — a static mock of the iOS system status bar (time, signal, Wi-Fi, battery).
2. **Navigation bar** — a 40 px bar with three zones: \`leftSlot\`, a centred YuLife logo,
   and \`rightSlot\`.
3. **Sub-nav strip** — an 8 px gutter, accepting optional \`subNavSlot\` content.

**Default presentation** (as seen in the Quests screen): hamburger icon in \`leftSlot\`,
YuCoin balance + coin icon in \`rightSlot\`, transparent background over the illustrated
screen content.
        `.trim(),
      },
    },
  },
  argTypes: {
    background: { control: "boolean" },
    shadow: { control: "boolean" },
    darkMode: { control: "boolean" },
    leftSlot: { control: false },
    rightSlot: { control: false },
    subNavSlot: { control: false },
  },
  // Prevent fixed positioning from stacking stories on top of each other in Docs
  decorators: [
    (Story) => (
      <div style={{ minHeight: 120, position: "relative" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof NavigationHeader>;

// ─── Default presentation (Quests screen) ─────────────────────────────────────

/**
 * The default NavigationHeader as it appears in the Quests screen:
 * hamburger menu on the left, YuCoin balance on the right, transparent
 * background overlaying the illustrated screen content.
 *
 * Figma reference: Quests Spec → node 127-11183
 */
export const Default: Story = {
  args: {
    leftSlot: HamburgerLeft,
    rightSlot: <YuCoinValue value="123,131" />,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Default transparent header over an illustrated background — as used on the " +
          "Quests screen. Hamburger icon opens the side menu; YuCoin balance shows " +
          "the user's current coin total with the YuCoin nav icon.",
      },
    },
  },
};

// ─── Variants ─────────────────────────────────────────────────────────────────

/** White background, no shadow — useful when the screen behind is busy. */
export const WithBackground: Story = {
  args: {
    background: true,
    leftSlot: HamburgerLeft,
    rightSlot: <YuCoinValue value="123,131" />,
  },
  parameters: {
    docs: {
      description: {
        story:
          "White background fill with no shadow. Use when the content behind the header " +
          "is visually busy and the header needs its own surface.",
      },
    },
  },
};

/**
 * White background with a subtle bottom shadow, communicating that content
 * scrolls beneath. The most common variant for screens with scrollable bodies.
 */
export const WithShadow: Story = {
  args: {
    background: true,
    shadow: true,
    leftSlot: HamburgerLeft,
    rightSlot: <YuCoinValue value="123,131" />,
  },
  parameters: {
    docs: {
      description: {
        story:
          "White background with a `0 2px 0 rgba(0,0,0,0.08)` bottom shadow. " +
          "Apply when body content scrolls beneath the header.",
      },
    },
  },
};

/** White background with back button and close — typical for modal/sub-screen headers. */
export const WithBackAndClose: Story = {
  args: {
    background: true,
    shadow: true,
    leftSlot: (
      <>
        <Icon svg={LeftIcon} size={24} color={colors.textPrimary} accessibilityLabel="Back" />
        <span
          style={{
            ...textStyles.body2Regular,
            lineHeight: `${textStyles.body2Regular.lineHeight}px`,
            color: colors.textPrimary,
            whiteSpace: "nowrap",
          }}
        >
          Back
        </span>
      </>
    ),
    rightSlot: <Icon svg={CloseIcon} size={24} color={colors.textPrimary} accessibilityLabel="Close" />,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A common slot composition for sub-screens: back button + label on the left, " + "close icon on the right.",
      },
    },
  },
};

/** Dark-mode variant over a dark or image-heavy background. */
export const DarkMode: Story = {
  args: {
    darkMode: true,
    leftSlot: HamburgerLeftDark,
    rightSlot: <YuCoinValue value="123,131" dark={true} />,
  },

  parameters: {
    docs: {
      description: {
        story:
          "Dark-mode variant: status bar icons, time, and the monochrome YuLife logo all " +
          "render in white. Use `colors.textInverse` (#FFFFFF) for all slot content.",
      },
    },
  },

  globals: {
    backgrounds: {
      value: "dark",
    },
  },
};

/** Settings icon as right action — alternative right-slot pattern. */
export const WithSettings: Story = {
  args: {
    background: true,
    shadow: true,
    leftSlot: HamburgerLeft,
    rightSlot: <Icon svg={SettingsGearIcon} size={24} color={colors.textPrimary} accessibilityLabel="Settings" />,
  },
  parameters: {
    docs: {
      description: {
        story: "Settings icon in the right slot — an alternative to the YuCoin balance.",
      },
    },
  },
};
