import type { Meta, StoryObj } from "@storybook/react-webpack5";
import LeaderboardSettings from "@screens/member/leaderboard-settings/leaderboard-settings.screen";
import { ROUTES } from "@navigation/constants";
import { createScreenMeta } from "../_utils/screen-meta";
import { logAction } from "../_utils/mock-actions";
import { MOCK_LEADERBOARD_ENROLLMENTS, MOCK_SETTINGS_NOTIFICATIONS } from "../_fixtures/mock-tier1";

const meta = {
  title: "Screens/Member/LeaderboardSettings",
  ...createScreenMeta({
    title: "Member/LeaderboardSettings",
    description: [
      "Leaderboard privacy and notification settings. Users opt in/out of company leaderboards and configure inbox alerts.",
      "",
      "**When to use:** Opened from Leaderboard tab settings icon or Settings screen.",
      "**Commonly used with:** `LeaderboardToggle`, `NotificationsItem`, `GenericHeadingAbsolute`.",
      "**Theme-aware:** No.",
    ].join("\n"),
    component: LeaderboardSettings,
    route: ROUTES.leaderboardSettings,
    screenPath: "src/components/screens/member/leaderboard-settings/leaderboard-settings.screen.tsx",
  }),
  argTypes: {
    onLeftIconPress: { action: "back", description: "Navigates back." },
    onRightIconPress: { action: "info", description: "Opens info tooltip." },
    leaderboards: { control: false, description: "Leaderboard enrollments grouped by social group." },
    inboxNotificationsSettings: { control: false, description: "Inbox notification toggles for leaderboard events." },
    onChangeConsent: { action: "change-consent", description: "Updates opt-in/out for a specific leaderboard." },
  },
} satisfies Meta<typeof LeaderboardSettings>;

export default meta;
type Story = StoryObj<typeof LeaderboardSettings>;

const baseArgs = {
  onLeftIconPress: logAction("back"),
  onRightIconPress: logAction("info"),
  leaderboards: MOCK_LEADERBOARD_ENROLLMENTS,
  inboxNotificationsSettings: MOCK_SETTINGS_NOTIFICATIONS,
  onChangeConsent: logAction("change-consent"),
};

export const Default: Story = { args: baseArgs };

export const AllOptedOut: Story = {
  args: {
    ...baseArgs,
    leaderboards: MOCK_LEADERBOARD_ENROLLMENTS.map((lb) => ({ ...lb, consent: false })),
  },
};

export const WithInboxNotifications: Story = {
  args: baseArgs,
};

export const Playground: Story = { args: baseArgs };
