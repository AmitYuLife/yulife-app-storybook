import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Component from "./challenge-tile";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Design System/Molecules/ChallengeTile",
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
