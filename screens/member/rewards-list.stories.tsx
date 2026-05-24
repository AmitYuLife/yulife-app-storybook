import type { Meta, StoryObj } from "@storybook/react-webpack5";
import RewardsListScreen from "@screens/member/rewards/list/rewards-list.screen";
import { ROUTES } from "@navigation/constants";
import { createScreenMeta } from "../_utils/screen-meta";
import { logAction, noop } from "../_utils/mock-actions";
import { MOCK_RECENT_REWARDS, MOCK_REWARDS_LIST_DATA } from "../_fixtures/mock-tier1";
import { MOCK_SHOPFRONT_WITH_EXPIRY } from "../_fixtures/mock-shopfront";

const meta = {
  title: "Screens/Member/RewardsList",
  ...createScreenMeta({
    title: "Member/RewardsList",
    description: [
      "Full voucher list view on the Rewards tab. Shows store location header, recently-used section, and scrollable reward items.",
      "",
      "**When to use:** Rewards tab when `tempGameNewRewardsScreen` feature flag is enabled.",
      "**Commonly used with:** `RewardsListItem`, `RewardRecentlyUsedSection`, `FirstTimeContentLocationSelection`.",
      "**Theme-aware:** No.",
    ].join("\n"),
    component: RewardsListScreen,
    route: ROUTES.rewards,
    screenPath: "src/components/screens/member/rewards/list/rewards-list.screen.tsx",
  }),
  argTypes: {
    onLeftMenuPress: { action: "menu", description: "Opens the side menu." },
    rewardsData: { control: false, description: "Full rewards list query data including store location metadata." },
    onItemPress: { action: "item-press", description: "Opens a reward detail screen." },
    onRefresh: { action: "refresh", description: "Pull-to-refresh handler." },
    onChangeStoreLocationPress: { action: "store-location", description: "Opens the store region selector." },
    loading: { control: "boolean", description: "Shows loading skeleton on first load." },
    recentRewards: { control: false, description: "Recently used rewards for the horizontal carousel section." },
  },
} satisfies Meta<typeof RewardsListScreen>;

export default meta;
type Story = StoryObj<typeof RewardsListScreen>;

const baseArgs = {
  onLeftMenuPress: noop,
  rewardsData: MOCK_REWARDS_LIST_DATA,
  recentRewards: MOCK_RECENT_REWARDS,
  loading: false,
  onItemPress: logAction("item-press"),
  onRefresh: logAction("refresh"),
  onChangeStoreLocationPress: logAction("store-location"),
};

export const Default: Story = { args: baseArgs };

export const Loading: Story = {
  args: { ...baseArgs, loading: true },
};

export const FirstTimeStoreLocation: Story = {
  args: {
    ...baseArgs,
    rewardsData: {
      ...MOCK_REWARDS_LIST_DATA,
      hasUserSelectedStoreLocation: false,
    },
  },
};

export const StoreExpiryWarning: Story = {
  args: {
    ...baseArgs,
    rewardsData: {
      ...MOCK_REWARDS_LIST_DATA,
      rewardStoreAccessRevokesAt: MOCK_SHOPFRONT_WITH_EXPIRY.rewardList.rewardStoreAccessRevokesAt,
    },
  },
};

export const Playground: Story = { args: baseArgs };
