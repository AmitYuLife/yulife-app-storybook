import type { Meta, StoryObj } from "@storybook/react";
import CouponListItem from "./coupon-list-item";

const meta: Meta<typeof CouponListItem> = {
  component: CouponListItem,
  title: "Design System/Organisms/CouponListItem",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof CouponListItem>;

export const Default: Story = {
  args: {
    title: "Amazon",
    description: "6 coupons",
    onPress: () => console.log("pressed"),
    icon: "https://yulife-local.imgix.net/game/consumables/challenge-surge.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=3b209cf475fe2b569cae2e9256bc1134",
  },
};
