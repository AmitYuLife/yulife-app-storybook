import type { Meta, StoryObj } from "@storybook/react-webpack5";
import RewardsUnavailableScreen from "@screens/member/rewards/unavailable/rewards-unavailable.screen";
import { ROUTES } from "@navigation/constants";
import { createScreenMeta } from "../_utils/screen-meta";
import { logAction } from "../_utils/mock-actions";

const meta = {
  title: "Screens/Member/RewardsUnavailable",
  ...createScreenMeta({
    title: "Member/RewardsUnavailable",
    description: [
      "Empty state shown on the Rewards tab when the user's plan does not include a voucher store.",
      "",
      "**When to use:** Rendered by `RewardsTabManagerContainer` when rewards are unavailable for the user's plan.",
      "**Commonly used with:** `NavBar`, `TopBar`, purchase history CTA.",
      "**Theme-aware:** No.",
    ].join("\n"),
    component: RewardsUnavailableScreen,
    route: ROUTES.rewards,
    screenPath: "src/components/screens/member/rewards/unavailable/rewards-unavailable.screen.tsx",
  }),
  argTypes: {
    handlePurchasesPress: {
      action: "purchases",
      description: "Navigates to purchase history. Omit to hide the CTA.",
    },
  },
} satisfies Meta<typeof RewardsUnavailableScreen>;

export default meta;
type Story = StoryObj<typeof RewardsUnavailableScreen>;

const baseArgs = {
  handlePurchasesPress: logAction("purchases"),
};

export const Default: Story = { args: baseArgs };

export const Playground: Story = { args: baseArgs };
