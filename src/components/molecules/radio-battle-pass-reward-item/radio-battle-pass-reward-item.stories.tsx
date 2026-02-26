import type { Meta, StoryObj } from "@storybook/react-webpack5";
import RadioBattlePassRewardItem from "./radio-battle-pass-reward-item";

const meta: Meta<typeof RadioBattlePassRewardItem> = {
  component: RadioBattlePassRewardItem,
  title: "Design System/Molecules/RadioBattlePassRewardItem",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/fOA03KUZB0kAv4Rj3zEg1h/YuCoin-for-Enterprise?node-id=1995-219030&t=WrMQR0zuBn6VJEgt-0",
    },
  },
  args: {
    reward: {
      title: "£20 Amazon voucher",
      id: "1",
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioBattlePassRewardItem>;

export const Unchecked: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};
