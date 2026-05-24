import type { Meta, StoryObj } from "@storybook/react-webpack5";
import QuestMapScreen from "@components/containers/member/quests/quest-map/quest-map.screen";
import { ROUTES } from "@navigation/constants";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { createScreenMeta } from "../_utils/screen-meta";
import { logAction, noop } from "../_utils/mock-actions";
import { questMapItemsForStory } from "../_utils/theme-for-story";
import { buildItemHeights, buildSnapOffsets } from "../_fixtures/mock-quest-map";
import { STORY_STEPS_ICON } from "../_fixtures/story-assets";

const buildStoryArgs = (currentLevel: number) => {
  const items = questMapItemsForStory(currentLevel);
  const itemHeights = buildItemHeights(items);

  return {
    items,
    itemHeights,
    snapOffsets: buildSnapOffsets(items, itemHeights),
    currentLevel,
  };
};

const leftIcons = [
  { icon: LeftIcon.MENU, onPress: noop, style: { marginEnd: 16 } },
  { icon: LeftIcon.NOTIFICATIONS, onPress: logAction("notifications"), style: { paddingStart: 8 } },
];

const meta = {
  title: "Screens/Member/QuestMap",
  ...createScreenMeta({
    title: "Member/QuestMap",
    description: [
      "The Quest tab screen. Shows a vertically scrollable map of episodes and level bubbles. The user scrolls to navigate worlds and taps a bubble to start a challenge.",
      "",
      "**When to use:** Navigated to from the bottom tab bar (index 1) when the user has no active challenge.",
      "**Commonly used with:** `QuestMapEpisode`, `EpisodeLevels`, `AnimalLoader`, `NavBar`, `TopBar`, `WeeklyQuestsButton`.",
      "**Theme-aware:** Yes — background images and level bubble colours change per world (Earth, Red Planet, etc.).",
    ].join("\n"),
    component: QuestMapScreen,
    route: ROUTES.quests,
    screenPath: "src/components/containers/member/quests/quest-map/quest-map.screen.tsx",
  }),
  argTypes: {
    items: {
      control: false,
      description:
        "Array of episode items to render. Each item contains the episode config (background, level coordinates) and the levels array. Built by `buildQuestMapItems()` in tests/stories.",
    },
    itemHeights: {
      control: false,
      description:
        "Pre-computed pixel heights for each episode item, derived from episode aspect ratio × device width.",
    },
    snapOffsets: {
      control: false,
      description: "Scroll offsets used by the FlashList snap behaviour — one per episode.",
    },
    currentLevel: {
      control: { type: "number", min: 1, max: 100, step: 1 },
      description: "The user's current level. Determines which bubble is highlighted as the active level.",
    },
    isLoading: {
      control: "boolean",
      description: "Shows the AnimalLoader spinner instead of the map.",
    },
    isScreenReaderEnabled: {
      control: "boolean",
      description: "When true, renders an accessible text-only level list instead of the visual map.",
    },
    weeklies: {
      control: false,
      description: "Weekly quest data from the server. When provided, shows the WeeklyQuestsButton in the header.",
    },
    leftIcons: {
      control: false,
      description: "Icons to display in the top-bar left slot (menu + optional notifications).",
    },
    onLeftMenuPress: { action: "left-menu", description: "Opens the side menu." },
  },
} satisfies Meta<typeof QuestMapScreen>;

export default meta;
type Story = StoryObj<typeof QuestMapScreen>;

const baseArgs = {
  ...buildStoryArgs(10),
  isLoading: false,
  isScreenReaderEnabled: false,
  weeklies: undefined,
  leftIcons,
  onLeftMenuPress: logAction("left-menu"),
};

export const Default: Story = {
  args: baseArgs,
};

export const Loading: Story = {
  args: {
    ...baseArgs,
    items: [],
    itemHeights: [],
    snapOffsets: [],
    isLoading: true,
  },
};

export const EarlyLevels: Story = {
  args: {
    ...baseArgs,
    ...buildStoryArgs(3),
  },
};

export const WithWeeklies: Story = {
  args: {
    ...baseArgs,
    weeklies: {
      __typename: "MobileGameWeeklies",
      id: "weeklies-001",
      endDateTime: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString(),
      hasUnclaimedRewards: false,
      hasJoined: true,
      activityProgress: [
        {
          __typename: "MobileWeeklyActivityProgress",
          id: "progress-1",
          activitySubTotal: "6,240",
          yuCoinSubTotal: "120",
          currentPosition: 3,
          maxLength: 5,
          isClaimable: false,
          isClaimed: false,
          isJoined: true,
          iconUrl: { __typename: "RemoteImage", id: "icon-steps", uri: STORY_STEPS_ICON },
        },
      ],
    },
  },
};

export const ScreenReaderMode: Story = {
  args: {
    ...baseArgs,
    isScreenReaderEnabled: true,
  },
};

export const Playground: Story = {
  args: baseArgs,
};
