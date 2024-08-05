import type { Meta, StoryObj } from "@storybook/react";
import RadioBattlePassRewardItem from "./radio-battle-pass-reward-item";
import { View } from "react-native";

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

const style = { backgroundColor: "#404040", width: 414, height: 100, padding: 10 };

export const LightThemeUnchecked: Story = {
  args: {
    theme: "light",
  },
};

export const LightThemeChecked: Story = {
  args: {
    theme: "light",
    checked: true,
  },
};

export const DarkThemeUnchecked: Story = {
  args: {
    theme: "dark",
  },
  decorators: [
    (Story) => (
      <View style={style}>
        <Story />
      </View>
    ),
  ],
};
export const DarkThemeChecked: Story = {
  args: {
    theme: "dark",
    checked: true,
  },
  decorators: [
    (Story) => (
      <View style={style}>
        <Story />
      </View>
    ),
  ],
};
