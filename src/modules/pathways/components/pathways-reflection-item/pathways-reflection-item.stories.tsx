import type { Meta, StoryObj } from "@storybook/react";
import Component from "./pathways-reflection-item";
import { noop } from "@utils";
import { Box } from "@atoms";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Modules/Pathways/PathwaysReflectionItem",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Box w={140}>
        <Story />
      </Box>
    ),
  ],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  args: {
    label: "Daily Reflection",
    onPress: noop,
    yucoinAmount: 25,
    status: "active",
  },
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Active: Story = {
  args: {
    status: "active",
  },
};

export const Completed: Story = {
  args: {
    status: "completed",
  },
};

export const Locked: Story = {
  args: {
    status: "locked",
  },
};
