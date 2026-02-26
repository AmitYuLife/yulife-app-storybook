import type { Meta, StoryObj } from "@storybook/react-webpack5";
import ProgressBar from "./progress-bar";

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  title: "Design System/Atoms/ProgressBar",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  args: {
    max: 100,
    current: 15,
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {},
};
