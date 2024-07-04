import type { Meta, StoryObj } from "@storybook/react";
import EnterpriseRewardHeader from "./enterprise-reward-header";

const meta: Meta<typeof EnterpriseRewardHeader> = {
  component: EnterpriseRewardHeader,
  title: "Design System/Organisms/EnterpriseRewardHeader",
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
type Story = StoryObj<typeof EnterpriseRewardHeader>;

export const Default: Story = {
  args: {},
};
