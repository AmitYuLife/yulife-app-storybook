import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import WalletItem from "./walletItem";
import WalletCard from "./walletCard";
import WalletCouponCard from "./walletCouponCard";
import WalletDiscountCard from "./walletDiscountCard";
import WalletCouponItem from "./walletCouponItem";

const mockAction = {
  type: "NAVIGATE",
  payload: JSON.stringify({
    routeId: "rewardPurchase",
    props: {
      stepId: "reward_purchase",
      dynamicId: "123",
    },
  }),
};

const mockItem = {
  title: "Test Reward",
  description: "This is a test reward description that might be a bit longer to test multiple lines",
  icon: { uri: "https://picsum.photos/200" },
  label: "Active",
  info: "2 Available",
  onPress: mockAction,
};

export default {
  title: "Design System/Molecules/Reward Wallet",
  component: WalletItem,
  args: {
    item: mockItem,
    onPress: () => console.log("pressed"),
  },
} as ComponentMeta<typeof WalletItem>;

export const DefaultItem: ComponentStory<typeof WalletItem> = (args) => <WalletItem {...args} />;

export const Card: ComponentStory<typeof WalletCard> = (args) => <WalletCard {...args} />;

export const CouponCard: ComponentStory<typeof WalletCouponCard> = (args) => <WalletCouponCard {...args} />;
CouponCard.args = {
  item: {
    ...mockItem,
    label: "Coupon",
    info: "7 Coupons",
  },
};

export const DiscountCard: ComponentStory<typeof WalletDiscountCard> = (args) => <WalletDiscountCard {...args} />;
DiscountCard.args = {
  item: {
    ...mockItem,
    label: "Discount",
    info: "20% off",
  },
};

export const CouponItem: ComponentStory<typeof WalletCouponItem> = (args) => <WalletCouponItem {...args} />;
CouponItem.args = {
  item: {
    ...mockItem,
    label: "Coupon",
    info: "Expires in 30 days",
  },
};

export const LongText: ComponentStory<typeof WalletItem> = (args) => (
  <WalletItem
    {...args}
    item={{
      ...mockItem,
      title: "This is a very long title that should be truncated",
      description:
        "This is a very long description that should be truncated after two lines. It continues even further to ensure we test the truncation properly.",
    }}
  />
);
LongText.storyName = "With Long Text";

export const NoInfo: ComponentStory<typeof WalletItem> = (args) => (
  <WalletItem
    {...args}
    item={{
      ...mockItem,
      info: undefined,
    }}
  />
);
NoInfo.storyName = "Without Info";
