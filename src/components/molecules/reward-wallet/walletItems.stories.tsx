import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import WalletItem from "./walletItem";
import WalletCard from "./walletCard";
import WalletCouponItem from "./walletCouponItem";
import WalletDiscountItem from "./walletDiscountIem";

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
  image: { uri: "https://picsum.photos/200" },
  label: "Active",
  info: [{ text: "2 Available" }],
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

export const CouponCard: ComponentStory<typeof WalletCouponItem> = (args) => <WalletCouponItem {...args} />;
CouponCard.args = {
  item: {
    ...mockItem,
    label: "COUPON",
    title: "This is card with stylized info",
    info: [{ text: "7%", style: "h1" }, { text: "OFF" }],
  },
};

export const DiscountItem: ComponentStory<typeof WalletDiscountItem> = (args) => <WalletDiscountItem {...args} />;
DiscountItem.args = {
  item: {
    ...mockItem,
    label: "DISCOUNT",
    info: [{ text: "20% off" }],
  },
};

export const CouponItem: ComponentStory<typeof WalletCouponItem> = (args) => <WalletCouponItem {...args} />;
CouponItem.args = {
  item: {
    ...mockItem,
    label: "COUPON",
    info: [{ text: "Expires in 30 days" }],
  },
};

export const LongText: ComponentStory<typeof WalletItem> = (args) => (
  <WalletItem
    {...args}
    item={{
      ...mockItem,
      label: "GIFT CARD",
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
      label: "GIFT CARD",
      ...mockItem,
      info: undefined,
    }}
  />
);
NoInfo.storyName = "Without Info";
