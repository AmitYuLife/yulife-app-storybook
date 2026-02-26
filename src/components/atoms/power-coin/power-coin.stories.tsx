import type { Meta, StoryObj } from "@storybook/react-webpack5";
import PowerCoin from "./power-coin";

const meta: Meta<typeof PowerCoin> = {
  component: PowerCoin,
  title: "Design System/Atoms/Coin",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  args: {
    yucoin: "+20",
  },
};

export default meta;
type Story = StoryObj<typeof PowerCoin>;

export const Default: Story = {
  args: {},
};
