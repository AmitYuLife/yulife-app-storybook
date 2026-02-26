import { Meta, StoryObj } from "@storybook/react-webpack5";
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

const meta: Meta<typeof WalletItem> = {
  title: "Design System/Molecules/Reward Wallet",
  component: WalletItem,
  args: {
    item: mockItem,
    onPress: () => console.log("pressed"),
  },
};
export default meta;

type Story = StoryObj<typeof WalletItem>;

export const DefaultItem: Story = {
  render: (args) => <WalletItem {...args} />,
};

export const Card: StoryObj<typeof WalletCard> = {
  render: (args) => <WalletCard {...args} />,
};

export const CouponCard: StoryObj<typeof WalletCouponItem> = {
  render: (args) => <WalletCouponItem {...args} />,
  args: {
    item: {
      ...mockItem,
      label: "COUPON",
      title: "This is card with stylized info",
      info: [{ text: "7%", style: "h1" }, { text: "OFF" }],
    },
  },
};

export const DiscountItem: StoryObj<typeof WalletDiscountItem> = {
  render: (args) => <WalletDiscountItem {...args} />,
  args: {
    item: {
      ...mockItem,
      label: "DISCOUNT",
      info: [{ text: "20% off" }],
    },
  },
};

export const CouponItem: StoryObj<typeof WalletCouponItem> = {
  render: (args) => <WalletCouponItem {...args} />,
  args: {
    item: {
      ...mockItem,
      label: "COUPON",
      info: [{ text: "Expires in 30 days" }],
    },
  },
};

export const LongText: Story = {
  name: "With Long Text",
  render: (args) => (
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
  ),
};

export const NoInfo: Story = {
  name: "Without Info",
  render: (args) => (
    <WalletItem
      {...args}
      item={{
        label: "GIFT CARD",
        ...mockItem,
        info: undefined,
      }}
    />
  ),
};
