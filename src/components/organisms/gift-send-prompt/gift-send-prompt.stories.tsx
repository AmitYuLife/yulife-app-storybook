import type { Meta, StoryObj } from "@storybook/react";
import Component from "./gift-send-prompt";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Design System/Organisms/GiftSendPrompt",
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
