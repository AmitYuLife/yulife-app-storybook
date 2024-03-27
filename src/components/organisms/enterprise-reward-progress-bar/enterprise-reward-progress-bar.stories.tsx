import type { Meta, StoryObj } from "@storybook/react";
import EnterpriseRewardProgressBar from "./enterprise-reward-progress-bar";

const meta: Meta<typeof EnterpriseRewardProgressBar> = {
  component: EnterpriseRewardProgressBar,
  title: "Design System/Organisms/EnterpriseRewardProgressBar",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof EnterpriseRewardProgressBar>;

export const Default: Story = {
  args: {
    yucoin: 100,
    level: 2,
    step: 30,
    steps: 100,
  },
};
