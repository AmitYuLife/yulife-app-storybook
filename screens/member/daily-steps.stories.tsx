import { useMemo, type ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import DailyStepsScreen from "@screens/member/daily-steps/daily-steps.screen";
import { ROUTES } from "@navigation/constants";
import { getInitialState as getInitialCoinsState } from "../../src/redux/coins/coins.reducer";
import { getInitialState as getInitialDailyStepsState } from "../../src/redux/daily-steps/daily-steps.reducer";
import { getInitialState as getInitialLevelsState } from "../../src/redux/levels/levels.reducer";
import { getInitialState as getInitialUserState } from "../../src/redux/user/user.reducer";
import { DEFAULT_STORY_FEATURES } from "../../.storybook/story-store";
import { createScreenMeta } from "../_utils/screen-meta";
import { logAction, noop } from "../_utils/mock-actions";
import { themeForStory } from "../_utils/theme-for-story";
import { MOCK_HERO_CARDS } from "../_fixtures/mock-hero-cards";

/** Phase 1 shell stories use `isLoading: true` to skip DailyStepsOnline's Redux reads.
 *  `WithEvents` preloads hero card data and renders the online panel with the event carousel. */

const dailyStepsWithEventsState = {
  user: {
    ...getInitialUserState(),
    features: DEFAULT_STORY_FEATURES,
    heroCards: MOCK_HERO_CARDS,
  },
  levels: {
    ...getInitialLevelsState(),
    level: 10,
    yuniversalMap: 0,
    yuniversalLevel: 0,
  },
  coins: {
    ...getInitialCoinsState(),
    dailyStepsEarned: 15,
  },
  dailySteps: {
    ...getInitialDailyStepsState(),
    dailySteps: 4000,
  },
};

const SURGE_ACTIVE = {
  endDateTime: new Date(Date.now() + 30 * 60 * 1000).toISOString(),
  multiplier: "2x",
  title: "Weekend Surge",
  description: "Double YuCoin on all activities this weekend.",
  lottie: null,
};

const DailyStepsStory = (args: ComponentProps<typeof DailyStepsScreen>) => {
  const theme = useMemo(
    () => themeForStory(args.currentLevel, args.yuniversalMap),
    [args.currentLevel, args.yuniversalMap]
  );

  return <DailyStepsScreen {...args} theme={theme} />;
};

const meta = {
  title: "Screens/Member/DailySteps",
  ...createScreenMeta({
    title: "Member/DailySteps",
    description: [
      "The YuCoin (first) tab screen. Shows a large animated YuCoin badge at the centre, streak and surge indicators, the daily activity panel, and the custom NavBar. The content section (`contentProps`) is rendered by `DailyStepsContent` which branches to a loading skeleton or the `DailyStepsOnline` panel depending on health permission status.",
      "",
      "**When to use:** Navigated to from the bottom tab bar (index 0). The root screen after login.",
      "**Commonly used with:** `YuCoinBadge`, `Streak`, `Surge`, `DailyStepsContent`, `TopBar`, `NavBar`.",
      "**Theme-aware:** Yes — top-bar type, background tint, and glow colour come from the active world theme (`getTheme(currentLevel)`).",
      "",
      "**Phase 1 stories (this file):** Shell variants using `contentProps: { isLoading: true }` to skip the Redux-heavy `DailyStepsOnline` panel. `WithEvents` renders the full online panel with preloaded hero cards.",
      "**Phase 2 (follow-up):** Additional connected variants with health permission panels and live Apollo data.",
    ].join("\n"),
    component: DailyStepsScreen,
    route: ROUTES.dailySteps,
    screenPath: "src/components/screens/member/daily-steps/daily-steps.screen.tsx",
  }),
  argTypes: {
    hasPermission: {
      control: "boolean",
      description:
        "Whether the user has granted health data permission. When false, the YuCoin badge renders in greyscale and `contentProps.isUnauthorised` is true.",
    },
    hasEvents: {
      control: "boolean",
      description: "When true, adjusts the top padding to make room for the event panel.",
    },
    hideInformationIcon: {
      control: "boolean",
      description:
        "Hides the ℹ️ icon overlay on the YuCoin badge. Set to true once the user has viewed the YuCoin power information screen.",
    },
    currentWorld: {
      control: { type: "number", min: 0, max: 6 },
      description:
        "Current world index (0 = Earth, 1 = Red Planet, …). Passed to `YuCoinBadge` for rendering the correct animation.",
    },
    currentYuniverse: {
      control: { type: "number", min: 0, max: 3 },
      description: "Yuniverse index within the current world — affects YuCoin badge animation variant.",
    },
    currentLevel: {
      control: { type: "number", min: 1, max: 1500 },
      description: "User's current level. Used to compute the world and for pad-height adjustments.",
    },
    yuniversalLevel: {
      control: { type: "number", min: 0 },
      description: "Yuniversal level — non-zero only when the user has completed the standard map.",
    },
    yuniversalMap: {
      control: { type: "number", min: 0 },
      description: "Yuniversal map index — non-zero only when the user is on the Yuniversal map.",
    },
    hasDoneChallengeToday: {
      control: "boolean",
      description: "Whether the user completed at least one challenge today. Affects the Streak button CTA.",
    },
    isChallengeActive: {
      control: "boolean",
      description: "Whether the user is mid-challenge. Affects the Streak button CTA label.",
    },
    userSurge: {
      control: false,
      description:
        "Surge data from `getUserSurge`. When `endDateTime` is non-empty, a Surge chip is shown. Null/undefined = no surge.",
    },
    contentProps: {
      control: false,
      description:
        "Props forwarded to `DailyStepsContent`. Set `isLoading: true` for the loading shell. Phase 2 will populate the full online panel.",
    },
    theme: {
      control: false,
      description:
        "World theme from `getTheme(currentLevel)`. Provides top-bar type, background image, and glow settings.",
    },
    onCoinPress: { action: "coin-press", description: "Navigates to the Today Earnings detail screen." },
    onLeftMenuPress: { action: "left-menu", description: "Opens the side menu." },
    onNotificationPress: { action: "notifications", description: "Navigates to the notification centre." },
    onStreakPress: { action: "streak-press", description: "Navigates to the streak screen." },
  },
  render: (args) => <DailyStepsStory {...args} />,
} satisfies Meta<typeof DailyStepsScreen>;

export default meta;
type Story = StoryObj<typeof DailyStepsScreen>;

const baseArgs = {
  hasPermission: true,
  hasEvents: false,
  hideInformationIcon: false,
  currentWorld: 0,
  currentYuniverse: 0,
  currentLevel: 10,
  yuniversalLevel: 0,
  yuniversalMap: 0,
  hasDoneChallengeToday: false,
  isChallengeActive: false,
  userSurge: null,
  contentProps: { isLoading: true },
  onCoinPress: logAction("coin-press"),
  onLeftMenuPress: noop,
  onNotificationPress: logAction("notifications"),
  onStreakPress: logAction("streak-press"),
};

export const Default: Story = {
  args: baseArgs,
};

export const NoPermission: Story = {
  args: {
    ...baseArgs,
    hasPermission: false,
    contentProps: { isLoading: false, isUnauthorised: true },
  },
};

export const WithSurge: Story = {
  args: {
    ...baseArgs,
    userSurge: SURGE_ACTIVE,
  },
};

export const WithEvents: Story = {
  parameters: {
    preloadedState: dailyStepsWithEventsState,
    docs: {
      description: {
        story:
          "Daily Steps with the hero card carousel visible. Hero cards are preloaded in Redux (`user.heroCards`) and rendered by `DailyStepsOnline` via `HeroCards`.",
      },
    },
  },
  args: {
    ...baseArgs,
    hasEvents: true,
    contentProps: {
      isLoading: false,
      showHeroCards: true,
    },
  },
};

export const InformationIconHidden: Story = {
  args: {
    ...baseArgs,
    hideInformationIcon: true,
  },
};

export const YuniversalWorld: Story = {
  args: {
    ...baseArgs,
    // yuniversalMap > 0 routes getTheme() to yuniversalStyles, which uses a Lottie
    // animation for the background.  This story exercises the Lottie stub path.
    yuniversalMap: 1,
    yuniversalLevel: 1,
  },
};

export const Playground: Story = {
  args: baseArgs,
};
