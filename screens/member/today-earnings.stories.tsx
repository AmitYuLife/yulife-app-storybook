import type { Meta, StoryObj } from "@storybook/react-webpack5";
import TodayEarningsScreen from "@screens/member/today-earnings/today-earnings.screen";
import { ROUTES } from "@navigation/constants";
import { createScreenMeta } from "../_utils/screen-meta";
import { logAction } from "../_utils/mock-actions";
import { MOCK_TODAY_EARNINGS_FEED, MOCK_TODAY_EARNINGS_HEADER } from "../_fixtures/mock-tier1";

const meta = {
  title: "Screens/Member/TodayEarnings",
  ...createScreenMeta({
    title: "Member/TodayEarnings",
    description: [
      "YuCoin earnings breakdown for today. Shows total coins earned, YuCoin power multiplier, and per-activity progress bars.",
      "",
      "**When to use:** Navigated from the YuCoin badge tap on Daily Steps.",
      "**Commonly used with:** `YuCoinBadge`, `ActivityFeed`, `YucoinPowerButton`, `HintContainer`.",
      "**Theme-aware:** Partial — YuCoin badge animation uses world/yuniverse indices.",
    ].join("\n"),
    component: TodayEarningsScreen,
    route: ROUTES.todayEarnings,
    screenPath: "src/components/screens/member/today-earnings/today-earnings.screen.tsx",
  }),
  argTypes: {
    header: { control: false, description: "Today's YuCoin total and power multiplier from `getTodayEarnings`." },
    activityFeed: { control: false, description: "Activity rows with progress bars and YuCoin subtotals." },
    isGoogleFitAuthorised: {
      control: "boolean",
      description: "When false on Android, may show Google Fit authorisation prompt in activity rows.",
    },
    onLeftIconPress: { action: "back", description: "Navigates back to Daily Steps." },
    currentWorld: { control: "number", description: "World index for YuCoin badge animation (0 = Earth)." },
    currentYuniverse: { control: "number", description: "Yuniverse index within the current world." },
  },
} satisfies Meta<typeof TodayEarningsScreen>;

export default meta;
type Story = StoryObj<typeof TodayEarningsScreen>;

const baseArgs = {
  header: MOCK_TODAY_EARNINGS_HEADER,
  activityFeed: MOCK_TODAY_EARNINGS_FEED,
  isGoogleFitAuthorised: true,
  onLeftIconPress: logAction("back"),
  currentWorld: 0,
  currentYuniverse: 0,
};

export const Default: Story = { args: baseArgs };

export const ZeroCoinsToday: Story = {
  args: {
    ...baseArgs,
    header: { yuCoinToday: "0", yuCoinPower: 1 },
    activityFeed: MOCK_TODAY_EARNINGS_FEED.map((item) => ({
      ...item,
      activityProgress: item.activityProgress.map((progress) => ({
        ...progress,
        yuCoinSubTotal: "0",
        currentPosition: 0,
      })),
    })),
  },
};

export const GoogleFitUnauthorised: Story = {
  args: { ...baseArgs, isGoogleFitAuthorised: false },
};

export const Playground: Story = { args: baseArgs };
