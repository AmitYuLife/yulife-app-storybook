import type { Meta, StoryObj } from "@storybook/react-webpack5";
import LevelLine from "./level-line";

const meta: Meta<typeof LevelLine> = {
  component: LevelLine,
  title: "Design System/Atoms/LevelLine",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  args: {
    colour: "red",
    scale: 1,
  },
};

export default meta;
type Story = StoryObj<typeof LevelLine>;

export const Default: Story = {
  args: {},
};
