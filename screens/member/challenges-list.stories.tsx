import type { Meta, StoryObj } from "@storybook/react-webpack5";
import ChallengesListScreen from "@screens/member/challenges/challenges-list/challenges-list.screen";
import { ROUTES } from "@navigation/constants";
import { getInitialState as getInitialLevelsState } from "../../src/redux/levels/levels.reducer";
import { getInitialState as getInitialQuestMapState } from "../../src/redux/quest-map/quest-map.reducer";
import { getInitialState as getInitialUserState } from "../../src/redux/user/user.reducer";
import { createScreenMeta } from "../_utils/screen-meta";
import { logAction, noop } from "../_utils/mock-actions";
import { MOCK_CHALLENGES, MOCK_PATHWAY_CHALLENGE } from "../_fixtures/mock-tier1";
import { STORY_AVATAR_REMOTE_FILES } from "../_fixtures/story-assets";

const challengesListPreloadedState = {
  questMap: { ...getInitialQuestMapState(), inventoryItemCount: 3 },
  levels: { ...getInitialLevelsState(), level: 10, yuniversalMap: 0 },
  user: {
    ...getInitialUserState(),
    avatar: {
      ...getInitialUserState().avatar,
      avatarRemoteFiles: STORY_AVATAR_REMOTE_FILES,
    },
  },
};

const meta = {
  title: "Screens/Member/ChallengesList",
  ...createScreenMeta({
    title: "Member/ChallengesList",
    description: [
      "Level challenge list shown when drilling into a quest map level. Displays available and locked challenges plus an optional Pathways tile.",
      "",
      "**When to use:** Navigated from `QuestMap` when the user taps a level node.",
      "**Commonly used with:** `ChallengesList`, `PathwayChallengeTile`, `InventoryBanner`, `TopBar`.",
      "**Theme-aware:** Yes — background and tile colours come from `getTheme(currentLevel, yuniversalMap)`.",
    ].join("\n"),
    component: ChallengesListScreen,
    route: ROUTES.questsChallengesList,
    screenPath: "src/components/screens/member/challenges/challenges-list/challenges-list.screen.tsx",
  }),
  argTypes: {
    name: { control: "text", description: "Level name shown in the top bar, e.g. 'Level 10 — Forest Trail'." },
    currentLevel: { control: "number", description: "User's current level — drives theme selection." },
    yuniversalMap: { control: "number", description: "Non-zero when on the Yuniversal map." },
    challenges: { control: false, description: "Formatted challenge tiles for this level." },
    pathwayChallenge: { control: false, description: "Optional Pathways promotional tile at the top of the list." },
    loading: { control: "boolean", description: "Shows skeleton loading state for the challenge grid." },
    openConsumables: {
      control: false,
      description: "When provided and inventory count > 0, shows the consumables banner. Omit to hide.",
    },
    onPressLeftIcon: { action: "back", description: "Navigates back to the quest map." },
    onLayout: { action: "layout", description: "Called when the screen layout is measured." },
  },
} satisfies Meta<typeof ChallengesListScreen>;

export default meta;
type Story = StoryObj<typeof ChallengesListScreen>;

const baseArgs = {
  name: "Level 10 — Forest Trail",
  currentLevel: 10,
  yuniversalMap: 0,
  challenges: MOCK_CHALLENGES,
  pathwayChallenge: MOCK_PATHWAY_CHALLENGE,
  loading: false,
  onPressLeftIcon: logAction("back"),
  onLayout: noop,
};

export const Default: Story = {
  parameters: { preloadedState: challengesListPreloadedState },
  args: baseArgs,
};

export const Loading: Story = {
  parameters: { preloadedState: challengesListPreloadedState },
  args: { ...baseArgs, loading: true },
};

export const WithInventoryBanner: Story = {
  parameters: { preloadedState: challengesListPreloadedState },
  args: { ...baseArgs, openConsumables: logAction("consumables") },
};

export const LockedChallenges: Story = {
  parameters: { preloadedState: challengesListPreloadedState },
  args: {
    ...baseArgs,
    challenges: MOCK_CHALLENGES.map((c) => ({ ...c, isLocked: true })),
  },
};

export const WithPathwayTile: Story = {
  parameters: { preloadedState: challengesListPreloadedState },
  args: {
    ...baseArgs,
    pathwayChallenge: { ...MOCK_PATHWAY_CHALLENGE, isCompleted: false, isLocked: false },
  },
};

export const Playground: Story = {
  parameters: { preloadedState: challengesListPreloadedState },
  args: baseArgs,
};
