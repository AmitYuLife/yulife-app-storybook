import type { Meta, StoryObj } from "@storybook/react-webpack5";
import AvPlayerProgressBar from "./av-player-progress-bar";

const meta: Meta<typeof AvPlayerProgressBar> = {
  component: AvPlayerProgressBar,
  title: "Design System/Organisms/AvPlayerProgressBar",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  args: {
    currentProgress: 10000,
    duration: 20000,
  },
};

export default meta;
type Story = StoryObj<typeof AvPlayerProgressBar>;

export const Default: Story = {
  args: {},
};
