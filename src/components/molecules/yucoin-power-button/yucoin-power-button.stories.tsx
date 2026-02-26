import type { Meta, StoryObj } from "@storybook/react-webpack5";
import YuCoinPowerButton from "./yucoin-power-button";

type Story = StoryObj<typeof YuCoinPowerButton>;

const meta: Meta<typeof YuCoinPowerButton> = {
  component: YuCoinPowerButton,
  title: "Design System/Molecules/YuCoinPowerButton",
  tags: ["autodocs"],
  parameters: {},
  args: {},
};

export default meta;

export const Default: Story = {
  args: {},
};
