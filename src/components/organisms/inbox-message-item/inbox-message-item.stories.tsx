import type { Meta, StoryObj } from "@storybook/react";
import Component from "./inbox-message-item";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Design System/Organisms/InboxMessageItem",
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
type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {},
};
