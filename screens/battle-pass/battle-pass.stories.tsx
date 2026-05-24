import type { Meta, StoryObj } from "@storybook/react-webpack5";
import BattlePassScreen from "@screens/battle-pass/battle-pass.screen";
import { ROUTES } from "@navigation/constants";
import { createScreenMeta } from "../_utils/screen-meta";
import { logAction, noop } from "../_utils/mock-actions";
import { MOCK_BATTLE_PASS_PROGRESS, MOCK_BATTLE_PASS_REWARDS } from "../_fixtures/mock-tier1";
import { STORY_BATTLE_PASS_BACKGROUND } from "../_fixtures/story-assets";

const meta = {
  title: "Screens/BattlePass/BattlePass",
  ...createScreenMeta({
    title: "BattlePass/BattlePass",
    description: [
      "Donations battle pass screen showing season progress, reward tiers, and claim interactions.",
      "",
      "**When to use:** Second tab on Rewards (`BattlePassContainer`) or navigated from a reward pass card on Shopfront.",
      "**Commonly used with:** `BattlePassHeader`, `BattlePassProgressBar`, `BattlePassListItem`, `RewardsList`.",
      "**Theme-aware:** Partial — progress bar uses theme primary colour.",
    ].join("\n"),
    component: BattlePassScreen,
    route: ROUTES.battlePass,
    screenPath: "src/components/screens/battle-pass/battle-pass.screen.tsx",
  }),
  argTypes: {
    title: { control: "text", description: "Battle pass season title." },
    description: { control: "text", description: "Season description shown below the title." },
    disclaimer: { control: "text", description: "Optional legal disclaimer at the bottom." },
    backgroundImage: { control: false, description: "Header background image." },
    isInnerScreen: { control: "boolean", description: "When true, renders as a pushed screen with back navigation." },
    donationTemplates: { control: false, description: "Donation template cards (legacy — may be empty)." },
    progressStatus: { control: false, description: "Current level, step, and total steps for the progress bar." },
    rewards: { control: false, description: "List of battle pass reward tiers with claim status." },
    onBackPress: { action: "back", description: "Back navigation handler when `showNavigation` is true." },
    showNavigation: { control: "boolean", description: "Shows top bar with back button and wallet icon." },
    onPressWallet: { action: "wallet", description: "Navigates to purchase history." },
    onComplete: { action: "complete", description: "Called when season is complete (container legacy prop)." },
    showCoinAnimation: { control: "boolean", description: "Triggers coin animation on reward claim." },
    componentId: { control: false, description: "Navigation component ID for modal routing." },
    showFirstLevelScreenState: {
      control: "boolean",
      description: "When true, shows the first-level onboarding variant instead of the full pass.",
    },
  },
} satisfies Meta<typeof BattlePassScreen>;

export default meta;
type Story = StoryObj<typeof BattlePassScreen>;

const baseArgs = {
  title: "Spring Wellbeing Pass",
  description: "Complete wellbeing activities to unlock rewards for you and your chosen charity.",
  disclaimer: "Rewards are subject to availability. Terms apply.",
  backgroundImage: { uri: STORY_BATTLE_PASS_BACKGROUND },
  isInnerScreen: false,
  donationTemplates: [],
  progressStatus: MOCK_BATTLE_PASS_PROGRESS,
  rewards: MOCK_BATTLE_PASS_REWARDS,
  onBackPress: logAction("back"),
  showNavigation: false,
  onPressWallet: logAction("wallet"),
  onComplete: noop,
  showCoinAnimation: false,
  componentId: "storybook-screen",
  showFirstLevelScreenState: false,
};

export const Default: Story = { args: baseArgs };

export const FirstLevelVariant: Story = {
  args: { ...baseArgs, showFirstLevelScreenState: true },
};

export const SeasonComplete: Story = {
  args: {
    ...baseArgs,
    progressStatus: { ...MOCK_BATTLE_PASS_PROGRESS, step: 5, steps: 5 },
    rewards: MOCK_BATTLE_PASS_REWARDS.map((r) => ({ ...r, status: "claimed" as const })),
  },
};

export const WithNavigation: Story = {
  args: { ...baseArgs, showNavigation: true, isInnerScreen: true },
};

export const Playground: Story = { args: baseArgs };
