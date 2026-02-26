import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Component from "./card";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Design System/Molecules/Card",
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
