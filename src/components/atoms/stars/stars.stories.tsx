import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Stars from "./stars";

const meta: Meta<typeof Stars> = {
  component: Stars,
  title: "Design System/Atoms/Stars",
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
type Story = StoryObj<typeof Stars>;

export const Default: Story = {
  args: {},
};
