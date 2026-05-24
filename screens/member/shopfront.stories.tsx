import type { Meta, StoryObj } from "@storybook/react-webpack5";
import ShopfrontScreen from "@screens/member/shopfront/shopfront.screen";
import { ROUTES } from "@navigation/constants";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { createScreenMeta } from "../_utils/screen-meta";
import { logAction, noop } from "../_utils/mock-actions";
import { MOCK_SHOPFRONT, MOCK_SHOPFRONT_WITH_EXPIRY, MOCK_REWARD_ITEMS } from "../_fixtures/mock-shopfront";

const leftIcons = [
  { icon: LeftIcon.MENU, onPress: noop, style: { marginEnd: 16 } },
  { icon: LeftIcon.NOTIFICATIONS, onPress: logAction("notifications"), style: { paddingStart: 8 } },
];

const meta = {
  title: "Screens/Member/Shopfront",
  ...createScreenMeta({
    title: "Member/Shopfront",
    description: [
      "The Rewards tab store view. Shows active reward passes (battle pass cards), a recently-used reward section, and a full voucher list. This is the default view when the Rewards tab is opened and `hasVoucherStore` is true.",
      "",
      "**When to use:** Rendered by `ShopFrontContainer` inside `RewardsTabManagerContainer` when the active section is `RewardsSection.Store`.",
      "**Commonly used with:** `RewardPass`, `RewardRecentlyUsedSectionContainer`, `RewardsListItem`, `RewardSearchOverlayContainer`, `NavBar`, `TopBar`.",
      "**Theme-aware:** No — uses fixed colours.",
      "**Out of scope for this story:** Donations tab (`BattlePassContainer`), Premium tab (`RewardsUnlockContainer`).",
    ].join("\n"),
    component: ShopfrontScreen,
    route: ROUTES.rewards,
    screenPath: "src/components/screens/member/shopfront/shopfront.screen.tsx",
  }),
  argTypes: {
    shopfront: {
      control: false,
      description:
        "Full `GetMobileGameShopfrontQuery` response shape. Provides reward passes, recently-used rewards, and store metadata.",
    },
    allRewardItems: {
      control: false,
      description:
        "Flat list of store voucher items from `GetMobileRewardsListQuery`. Appended after the reward-pass section.",
    },
    leftIcons: {
      control: false,
      description: "Top-bar left icon set (menu + optional notifications).",
    },
    isSearchOpen: {
      control: "boolean",
      description:
        "When true, renders the `RewardSearchOverlayContainer` covering the screen. The search icon in the header is always visible when `hasVoucherStore` is true.",
    },
    hasVoucherStore: {
      control: "boolean",
      description:
        "When false, hides the search bar and voucher list and shows a `NoStoreWallet` prompt instead. Driven by the user's plan configuration.",
    },
    shouldShowFirstTimeModal: {
      control: "boolean",
      description:
        "When true, shows `FirstTimeContentLocationSelection` overlay prompting the user to pick a store region. True when `hasUserSelectedStoreLocation` is false.",
    },
    onPressWallet: { action: "wallet", description: "Navigates to the purchases/wallet screen." },
    handleEndReached: {
      action: "end-reached",
      description: "Called when the list is scrolled to the bottom — triggers pagination.",
    },
    handleStoreLocationPress: { action: "store-location", description: "Opens the store location selector." },
    setIsSearchOpen: { action: "set-search-open", description: "Opens or closes the search overlay." },
    onItemPress: { action: "item-press", description: "Opens a specific reward detail screen." },
  },
} satisfies Meta<typeof ShopfrontScreen>;

export default meta;
type Story = StoryObj<typeof ShopfrontScreen>;

const baseArgs = {
  shopfront: MOCK_SHOPFRONT,
  allRewardItems: MOCK_REWARD_ITEMS,
  leftIcons,
  isSearchOpen: false,
  hasVoucherStore: true,
  shouldShowFirstTimeModal: false,
  onPressWallet: logAction("wallet"),
  handleEndReached: logAction("end-reached"),
  handleStoreLocationPress: logAction("store-location"),
  setIsSearchOpen: logAction("set-search-open"),
  onItemPress: logAction("item-press"),
};

export const Default: Story = {
  args: baseArgs,
};

export const SearchOpen: Story = {
  args: {
    ...baseArgs,
    isSearchOpen: true,
  },
};

export const FirstTimeStoreLocation: Story = {
  args: {
    ...baseArgs,
    shopfront: {
      ...MOCK_SHOPFRONT,
      rewardList: {
        ...MOCK_SHOPFRONT.rewardList,
        hasUserSelectedStoreLocation: false,
      },
    },
    shouldShowFirstTimeModal: true,
  },
};

export const StoreExpiryWarning: Story = {
  args: {
    ...baseArgs,
    shopfront: MOCK_SHOPFRONT_WITH_EXPIRY,
  },
};

export const NoVoucherStore: Story = {
  args: {
    ...baseArgs,
    hasVoucherStore: false,
    allRewardItems: [],
  },
};

export const NoRewardPasses: Story = {
  args: {
    ...baseArgs,
    shopfront: {
      ...MOCK_SHOPFRONT,
      rewardPasses: {
        ...MOCK_SHOPFRONT.rewardPasses,
        activeRewardPasses: [],
      },
    },
  },
};

export const Playground: Story = {
  args: baseArgs,
};
