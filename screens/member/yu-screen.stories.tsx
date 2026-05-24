import { type ComponentType } from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { YuScreen } from "@components/containers/member/yu/subcomponents/yu-screen-v5/yu-screen";
import { YuScreenContext } from "@components/containers/member/yu/context/yu-screen.context";
import { ROUTES } from "@navigation/constants";
import { getInitialState as getInitialLevelsState } from "../../src/redux/levels/levels.reducer";
import { getInitialState as getInitialYuScreenState } from "../../src/redux/yu-screen/yu-screen.reducer";
import { getInitialState as getInitialAppState } from "../../src/redux/app/app.reducer";
import { createScreenMeta } from "../_utils/screen-meta";
import { logAction } from "../_utils/mock-actions";
import { withPreloadedStore } from "../_utils/story-decorators";
import { DEFAULT_YU_SCREEN_SECTIONS, YU_SCREEN_LAST_LAYOUT_UPDATE } from "../_fixtures/mock-yu-screen-sections";
import {
  MOCK_EQUIPPED_ACHIEVEMENT,
  MOCK_YU_SCREEN_LEVEL,
  MOCK_YU_SCREEN_USER,
  MOCK_YUMOJI_PNG_FULL,
  MOCK_YUMOJI_PROMPT,
} from "../_fixtures/mock-yu-screen-hero";

/** Context values used across all YuScreen stories. */
const yuScreenContextValue = {
  yumojiRemoteUrl: MOCK_YUMOJI_PNG_FULL,
  earnRate: MOCK_YU_SCREEN_USER.earnRate,
};

/**
 * Preloaded Redux state for YuScreen stories.
 * - `user` = mock Alex Jones with Yumoji avatar URLs and achievements enabled.
 * - `yuScreen.sections` = pre-populated so renderSduiSection can display them.
 * - `yuScreen.lastLayoutUpdate` = end of today so the layout useEffect guard does not dispatch.
 * - `app.activeRoute` = yuScreen so the MaximiseYuSection section-update guard triggers correctly.
 * - `levels.level` = 401 (Forest world).
 */
const yuScreenPreloadedState = {
  user: MOCK_YU_SCREEN_USER,
  yuScreen: {
    ...getInitialYuScreenState(),
    sections: DEFAULT_YU_SCREEN_SECTIONS,
    lastLayoutUpdate: YU_SCREEN_LAST_LAYOUT_UPDATE,
  },
  levels: {
    ...getInitialLevelsState(),
    level: MOCK_YU_SCREEN_LEVEL,
    yuniversalMap: 0,
    yuniversalLevel: 0,
  },
  app: {
    ...getInitialAppState(),
    activeRoute: ROUTES.yuScreen,
  },
};

const meta = {
  title: "Screens/Member/YuScreen",
  ...createScreenMeta({
    title: "Member/YuScreen",
    description: [
      "The central hub (middle tab, index 2). Contains a hero header with the user's Yumoji, world background, and SDUI sections below the fold. Sections are fetched server-side and rendered via `renderSduiSection` — the section registry supports `MaximiseYuSection`, `ProductCardCarouselSection`, `WellbeingHubSection`, `ReferralSection`, `FeatureCardSection`, `HeroCardSection`, and `SduiSection`.",
      "",
      "**When to use:** Navigated to from the bottom tab bar (index 2).",
      "**Commonly used with:** `HeroHeaderBackground`, `HeroHeaderForeground`, `MaximiseYuSection`, `NameLevelMiniAvatar`, `NavBar`, `TopBar`.",
      "**Theme-aware:** Yes — hero background colours and images come from the current world level (`getCurrentWorldBackground(currentWorld)`).",
      "**Redux slices read:** `yuScreen.sections`, `yuScreen.lastLayoutUpdate`, `levels.level`, `levels.yuniversalMap`, `app.activeRoute`, `user.fullName`, `user.avatar`.",
      "",
      "**Story note:** Default story preloads mock user Alex Jones (level 401, Forest world) with a Yumoji avatar, equipped Zenith of the Mind achievement, Maximise Yu nudges, Wellbeing Hub perks, Powerful Protection product cards, and the Smoking Cessation feature card. `lastLayoutUpdate` is set to end of today to prevent the mount effect from dispatching `queryYuScreenLayout()` (sagas are absent in the story store).",
    ].join("\n"),
    component: YuScreen,
    route: ROUTES.yuScreen,
    screenPath: "src/components/containers/member/yu/subcomponents/yu-screen-v5/yu-screen.tsx",
  }),
  argTypes: {
    onNotificationPress: {
      action: "notifications",
      description: "Opens the notification centre. When provided, adds a bell icon to the TopBar.",
    },
    showAchievements: {
      control: "boolean",
      description: "When true, renders an `AchievementsShowcase` strip at the top of the sections area.",
    },
    achievement: {
      control: false,
      description:
        "Active achievement data from the server. When set, overrides hero colours and the top-bar type with the achievement's visual theme.",
    },
  },
  decorators: [
    // Wrap each story's Story component with YuScreenContext before it reaches the outer Redux provider.
    (Story: ComponentType) => (
      <YuScreenContext value={yuScreenContextValue}>
        <Story />
      </YuScreenContext>
    ),
  ],
} satisfies Meta<typeof YuScreen>;

export default meta;
type Story = StoryObj<typeof YuScreen>;

const baseArgs = {
  onNotificationPress: logAction("notifications"),
  showAchievements: true,
  achievement: MOCK_EQUIPPED_ACHIEVEMENT,
};

export const Default: Story = {
  decorators: [withPreloadedStore(yuScreenPreloadedState)],
  args: baseArgs,
};

export const WithAchievements: Story = {
  decorators: [withPreloadedStore(yuScreenPreloadedState)],
  args: baseArgs,
  parameters: {
    docs: {
      description: {
        story: "Same as Default — hero with equipped Zenith of the Mind achievement badge and showcase panel.",
      },
    },
  },
};

export const NoYumojiPrompt: Story = {
  decorators: [
    (Story: ComponentType) => (
      <YuScreenContext value={{ ...yuScreenContextValue, yumojiRemoteUrl: null as unknown as string }}>
        <Story />
      </YuScreenContext>
    ),
    withPreloadedStore({
      ...yuScreenPreloadedState,
      user: {
        ...MOCK_YU_SCREEN_USER,
        avatar: {
          isAvatarCreated: false,
          avatarRemoteFiles: {
            svgFull: "",
            pngFull: "",
            pngMini: "",
          },
        },
      },
      yuScreen: {
        ...getInitialYuScreenState(),
        sections: DEFAULT_YU_SCREEN_SECTIONS,
        lastLayoutUpdate: YU_SCREEN_LAST_LAYOUT_UPDATE,
        yumojiPrompt: MOCK_YUMOJI_PROMPT,
      },
    }),
  ],
  args: {
    ...baseArgs,
    showAchievements: false,
    achievement: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: "Hero header before the user has created a Yumoji — shows the YumojiPrompt CTA instead of the avatar.",
      },
    },
  },
};

export const NoSections: Story = {
  decorators: [
    withPreloadedStore({
      ...yuScreenPreloadedState,
      yuScreen: {
        ...getInitialYuScreenState(),
        sections: [],
        lastLayoutUpdate: YU_SCREEN_LAST_LAYOUT_UPDATE,
      },
    }),
  ],
  args: baseArgs,
  parameters: {
    docs: {
      description: {
        story:
          "Hero header with Yumoji and achievement badge but no SDUI sections — what the screen looks like before layout data loads.",
      },
    },
  },
};

export const NoNotificationBell: Story = {
  decorators: [withPreloadedStore(yuScreenPreloadedState)],
  args: {
    ...baseArgs,
    onNotificationPress: undefined,
  },
};

export const OceanWorld: Story = {
  decorators: [
    withPreloadedStore({
      ...yuScreenPreloadedState,
      levels: {
        ...getInitialLevelsState(),
        // Level 51 → getCurrentWorld(51) = 1 (ocean biome) on Earth planet.
        level: 51,
        yuniversalMap: 0,
        yuniversalLevel: 0,
      },
    }),
  ],
  args: baseArgs,
  parameters: {
    docs: {
      description: {
        story:
          "Hero header in the ocean world theme (level 51+). Exercises a different world background PNG via `normalizeImageSource`.",
      },
    },
  },
};

export const YuniversalWorld: Story = {
  decorators: [
    withPreloadedStore({
      ...yuScreenPreloadedState,
      levels: {
        ...getInitialLevelsState(),
        level: 1,
        // yuniversalMap > 0 switches the theme to yuniversalStyles, which uses a
        // static PNG background for the hero header (yuniversal_1.png).
        yuniversalMap: 1,
        yuniversalLevel: 1,
      },
    }),
  ],
  args: baseArgs,
  parameters: {
    docs: {
      description: {
        story:
          "Hero header in the Yuniversal world theme. Background switches to the Yuniversal PNG asset instead of a planet-specific image.",
      },
    },
  },
};

export const Playground: Story = {
  decorators: [withPreloadedStore(yuScreenPreloadedState)],
  args: baseArgs,
};
