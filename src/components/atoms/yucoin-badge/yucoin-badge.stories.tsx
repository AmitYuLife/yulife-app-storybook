import type { Meta, StoryObj } from "@storybook/react-webpack5";
import YuCoinBadge from "./yucoin-badge";

const meta: Meta<typeof YuCoinBadge> = {
  component: YuCoinBadge,
  title: "Design System/Atoms/YuCoinBadge",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  args: {
    width: 150,
    height: 150,
  },
};

export default meta;
type Story = StoryObj<typeof YuCoinBadge>;

export const Default: Story = {
  args: {},
};
