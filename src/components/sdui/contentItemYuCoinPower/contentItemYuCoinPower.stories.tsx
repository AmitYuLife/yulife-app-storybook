import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemYuCoinPower } from "./contentItemYuCoinPower";

type Story = StoryObj<typeof ContentItemYuCoinPower>;

const meta: Meta<typeof ContentItemYuCoinPower> = {
  component: ContentItemYuCoinPower,
  title: "Design System/SDUI/ContentItemYuCoinPower",
  tags: ["autodocs"],
  parameters: {},
  args: { yuCoinPower: 40, interactive: true, inactive: false },
};

export default meta;

export const Default: Story = {
  args: {},
};
