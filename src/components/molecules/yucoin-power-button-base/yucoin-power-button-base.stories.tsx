import type { Meta, StoryObj } from "@storybook/react-webpack5";
import YuCoinPowerButtonBase from "./yucoin-power-button-base";

type Story = StoryObj<typeof YuCoinPowerButtonBase>;

const meta: Meta<typeof YuCoinPowerButtonBase> = {
  component: YuCoinPowerButtonBase,
  title: "Design System/Molecules/YuCoinPowerButtonBase",
  tags: ["autodocs"],
  parameters: {},
  args: {},
};

export default meta;

export const Default: Story = {
  args: {},
};
