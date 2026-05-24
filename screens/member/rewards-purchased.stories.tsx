import type { Meta, StoryObj } from "@storybook/react-webpack5";
import RewardsPurchasedScreen from "@screens/member/rewards/purchased/rewards-purchased.screen";
import { ROUTES } from "@navigation/constants";
import { createScreenMeta } from "../_utils/screen-meta";
import { logAction, noop } from "../_utils/mock-actions";
import { MOCK_PURCHASED_REWARDS } from "../_fixtures/mock-tier1";

const meta = {
  title: "Screens/Member/RewardsPurchased",
  ...createScreenMeta({
    title: "Member/RewardsPurchased",
    description: [
      "Purchase history screen listing redeemed vouchers with date, cost, and delivery status.",
      "",
      "**When to use:** Opened from the wallet icon on Shopfront or from Rewards unavailable state.",
      "**Commonly used with:** `RewardsPurchasedList`, `PurchasesEmpty`, `RewardsListLayout`.",
      "**Theme-aware:** No.",
    ].join("\n"),
    component: RewardsPurchasedScreen,
    route: ROUTES.purchases,
    screenPath: "src/components/screens/member/rewards/purchased/rewards-purchased.screen.tsx",
  }),
  argTypes: {
    onLeftMenuPress: { action: "menu", description: "Opens the side menu or navigates back." },
    data: { control: false, description: "List of purchased reward items." },
    loading: { control: "boolean", description: "Shows pull-to-refresh spinner and initial loading skeleton." },
    onRefresh: { action: "refresh", description: "Pull-to-refresh handler." },
    onEndReached: { action: "end-reached", description: "Pagination handler when list is scrolled to bottom." },
  },
} satisfies Meta<typeof RewardsPurchasedScreen>;

export default meta;
type Story = StoryObj<typeof RewardsPurchasedScreen>;

const baseArgs = {
  onLeftMenuPress: noop,
  data: MOCK_PURCHASED_REWARDS,
  loading: false,
  onRefresh: logAction("refresh"),
  onEndReached: logAction("end-reached"),
};

export const Default: Story = { args: baseArgs };

export const Loading: Story = {
  args: { ...baseArgs, loading: true, data: [] },
};

export const Empty: Story = {
  args: { ...baseArgs, data: [] },
};

export const MultipleItems: Story = {
  args: {
    ...baseArgs,
    data: [
      ...MOCK_PURCHASED_REWARDS,
      {
        id: "purchase-3",
        day: "28",
        month: "Apr",
        reward: "Calm subscription",
        cost: "200 YuCoin",
        status: "Delivered",
        statusColour: "#00875A",
        onPress: noop,
      },
    ],
  },
};

export const Playground: Story = { args: baseArgs };
