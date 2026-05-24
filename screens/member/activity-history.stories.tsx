import type { Meta, StoryObj } from "@storybook/react-webpack5";
import ActivityHistoryScreen from "@screens/member/activity-history/activity-history.screen";
import { ROUTES } from "@navigation/constants";
import { createScreenMeta } from "../_utils/screen-meta";
import { logAction } from "../_utils/mock-actions";
import { MOCK_ACTIVITY_HISTORY_DAYS } from "../_fixtures/mock-tier1";
import { STORY_STEPS_ICON, STORY_YUCOIN_ICON } from "../_fixtures/story-assets";

const meta = {
  title: "Screens/Member/ActivityHistory",
  ...createScreenMeta({
    title: "Member/ActivityHistory",
    description: [
      "Monthly activity history showing daily YuCoin earnings broken down by activity type.",
      "",
      "**When to use:** Opened from the side menu 'Activity history' link.",
      "**Commonly used with:** `ActivityHistoryDay`, `ActivityHistoryHeader`, month picker.",
      "**Theme-aware:** No.",
    ].join("\n"),
    component: ActivityHistoryScreen,
    route: ROUTES.activityHistory,
    screenPath: "src/components/screens/member/activity-history/activity-history.screen.tsx",
  }),
  argTypes: {
    days: { control: false, description: "Activity history days for the selected month." },
    onRightIconPress: { action: "info", description: "Opens the activity history info tooltip." },
    onLeftIconPress: { action: "back", description: "Navigates back." },
    onMonthSelected: { action: "month-selected", description: "Called when user picks a different month." },
    loading: { control: "boolean", description: "Shows skeleton loading rows." },
    onRefresh: { action: "refresh", description: "Pull-to-refresh handler." },
  },
} satisfies Meta<typeof ActivityHistoryScreen>;

export default meta;
type Story = StoryObj<typeof ActivityHistoryScreen>;

const baseArgs = {
  days: MOCK_ACTIVITY_HISTORY_DAYS,
  onRightIconPress: logAction("info"),
  onLeftIconPress: logAction("back"),
  onMonthSelected: logAction("month-selected"),
  loading: false,
  onRefresh: logAction("refresh"),
};

export const Default: Story = { args: baseArgs };

export const Loading: Story = {
  args: { ...baseArgs, loading: true, days: [] },
};

export const Empty: Story = {
  args: { ...baseArgs, days: [] },
};

export const MultipleDays: Story = {
  args: {
    ...baseArgs,
    days: [
      ...MOCK_ACTIVITY_HISTORY_DAYS,
      {
        id: "day-2",
        title: "Sun 11 May",
        level: "Level 10",
        yucoin: "+22",
        leftIcon: { id: "level-icon-2", uri: STORY_STEPS_ICON },
        rightIcon: { id: "yucoin-icon-2", uri: STORY_YUCOIN_ICON },
        historyItems: [
          {
            title: "Steps",
            activityItems: [
              {
                title: "10,240 steps",
                leftIcon: { id: "steps-icon-2", uri: STORY_STEPS_ICON },
                rightIcon: { id: "yucoin-icon-3", uri: STORY_YUCOIN_ICON },
                yucoin: "+15 YuCoin",
              },
            ],
          },
        ],
      },
    ],
  },
};

export const Playground: Story = { args: baseArgs };
