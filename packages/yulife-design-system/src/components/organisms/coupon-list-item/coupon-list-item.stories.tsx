import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import { CouponListItem } from ".";

const meta: Meta<typeof CouponListItem> = {
  title: "Navigation/CouponListItem",
  component: CouponListItem,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: {
    title: "£10 coffee voucher",
    description: "Expires 30 Jun 2026",
    icon: "https://placehold.co/50x46/png",
    onPress: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof CouponListItem>;

export const Default: Story = {
  args: {
    title: "£10 coffee voucher",
    description: "Expires 30 Jun 2026",
    icon: "https://placehold.co/50x46/png",
    onPress: fn(),
  },
};

export const Playground: Story = {};
