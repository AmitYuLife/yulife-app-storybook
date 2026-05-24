import type { Meta, StoryObj } from "@storybook/react-webpack5";
import ReferralsScreen from "@screens/referrals/referrals.screen";
import { ROUTES } from "@navigation/constants";
import { createScreenMeta } from "../_utils/screen-meta";
import { logAction } from "../_utils/mock-actions";
import { MOCK_BUSINESS_ACCOUNT_STATE, MOCK_REFERRAL_HISTORY, MOCK_REFERRAL_INFO } from "../_fixtures/mock-tier1";

const meta = {
  title: "Screens/Referrals/Referrals",
  ...createScreenMeta({
    title: "Referrals/Referrals",
    description: [
      "Refer a colleague screen with share code, business account picker, and referral history list.",
      "",
      "**When to use:** Opened from the side menu 'Invite a colleague' link or onboarding badge.",
      "**Commonly used with:** `ReferralsHeader`, `CodeAndLinkCopy`, `BusinessPicker`, `UserAvatarCoinCard`.",
      "**Theme-aware:** Partial — background image from referral info query.",
    ].join("\n"),
    component: ReferralsScreen,
    route: ROUTES.referralInformation,
    screenPath: "src/components/screens/referrals/referrals.screen.tsx",
  }),
  argTypes: {
    onShare: { action: "share", description: "Opens the native share sheet with the referral link." },
    info: { control: false, description: "Referral information query result — code, reward amount, markdown copy." },
    handleClose: { action: "close", description: "Closes the referrals screen." },
    componentId: { control: false, description: "Navigation component ID for analytics." },
    data: { control: false, description: "Referral history items." },
    onFetchMoreData: { action: "fetch-more", description: "Pagination handler for referral history." },
    onRefresh: { action: "refresh", description: "Pull-to-refresh handler." },
    businessAccountState: { control: false, description: "Multi-business account picker state." },
    loading: { control: "boolean", description: "Pull-to-refresh loading state." },
  },
} satisfies Meta<typeof ReferralsScreen>;

export default meta;
type Story = StoryObj<typeof ReferralsScreen>;

const baseArgs = {
  onShare: async () => logAction("share")(),
  info: MOCK_REFERRAL_INFO,
  handleClose: logAction("close"),
  componentId: "storybook-screen",
  data: MOCK_REFERRAL_HISTORY,
  onFetchMoreData: logAction("fetch-more"),
  onRefresh: logAction("refresh"),
  businessAccountState: MOCK_BUSINESS_ACCOUNT_STATE,
  loading: false,
};

export const Default: Story = { args: baseArgs };

export const EmptyHistory: Story = {
  args: { ...baseArgs, data: [] },
};

export const Loading: Story = {
  args: { ...baseArgs, loading: true },
};

export const MultipleBusinessAccounts: Story = {
  args: {
    ...baseArgs,
    businessAccountState: {
      ...MOCK_BUSINESS_ACCOUNT_STATE,
      activeBusinessAccounts: [
        MOCK_BUSINESS_ACCOUNT_STATE.activeBusinessAccounts[0],
        {
          id: "ba-2",
          businessAccountId: "globex",
          businessAccountName: "Globex Corp",
        },
      ],
    },
  },
};

export const Playground: Story = { args: baseArgs };
