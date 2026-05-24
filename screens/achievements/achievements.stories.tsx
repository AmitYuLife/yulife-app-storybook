import type { Meta, StoryObj } from "@storybook/react-webpack5";
import AchievementsScreen from "@screens/achievements/achievements.screen";
import { ROUTES } from "@navigation/constants";
import { createScreenMeta } from "../_utils/screen-meta";
import { logAction } from "../_utils/mock-actions";
import { MOCK_ACHIEVEMENT_CATEGORIES, MOCK_ACHIEVEMENTS } from "../_fixtures/mock-tier1";

const meta = {
  title: "Screens/Achievements/Achievements",
  ...createScreenMeta({
    title: "Achievements/Achievements",
    description: [
      "Achievements gallery showing unlocked and locked badges with category filters and total points.",
      "",
      "**When to use:** Opened from the side menu or YuScreen achievements entry point.",
      "**Commonly used with:** `AchievementCard`, `AchievementPoints`, `ChipList`, achievement detail modal.",
      "**Theme-aware:** Partial — achievement card uses theme primary for unlocked state.",
    ].join("\n"),
    component: AchievementsScreen,
    route: ROUTES.achievements,
    screenPath: "src/components/screens/achievements/achievements.screen.tsx",
  }),
  argTypes: {
    achievementPoints: { control: "number", description: "Total achievement points earned by the user." },
    achievements: { control: false, description: "Achievement cards to display in the grid." },
    onRefresh: { action: "refresh", description: "Pull-to-refresh handler." },
    isLoading: { control: "boolean", description: "Shows skeleton loading placeholders." },
    isInspectingUser: {
      control: "boolean",
      description: "When true, viewing another user's achievements (read-only modal behaviour).",
    },
    categories: { control: false, description: "Category filter chips. Empty array hides the filter row." },
  },
} satisfies Meta<typeof AchievementsScreen>;

export default meta;
type Story = StoryObj<typeof AchievementsScreen>;

const baseArgs = {
  achievementPoints: 1250,
  achievements: MOCK_ACHIEVEMENTS,
  categories: MOCK_ACHIEVEMENT_CATEGORIES,
  onRefresh: logAction("refresh"),
  isLoading: false,
  isInspectingUser: false,
};

export const Default: Story = { args: baseArgs };

export const Loading: Story = {
  args: { ...baseArgs, isLoading: true, achievements: [] },
};

export const Empty: Story = {
  args: { ...baseArgs, achievements: [], achievementPoints: 0 },
};

export const WithCategories: Story = {
  args: baseArgs,
};

export const InspectingUser: Story = {
  args: { ...baseArgs, isInspectingUser: true },
};

export const Playground: Story = { args: baseArgs };
