import type { Meta, StoryObj } from "@storybook/react-webpack5";
import AvPlayerTimer from "./av-player-timer";

const meta: Meta<typeof AvPlayerTimer> = {
  component: AvPlayerTimer,
  title: "Design System/Organisms/AvPlayerTimer",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  args: {
    time: 60000,
  },
};

export default meta;
type Story = StoryObj<typeof AvPlayerTimer>;

export const Default: Story = {
  args: {},
};
