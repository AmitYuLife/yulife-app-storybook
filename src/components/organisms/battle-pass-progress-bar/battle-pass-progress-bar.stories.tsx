import type { Meta, StoryObj } from "@storybook/react-webpack5";
import BattlePassProgressBar from "./battle-pass-progress-bar";

const meta: Meta<typeof BattlePassProgressBar> = {
  component: BattlePassProgressBar,
  title: "Design System/Organisms/BattlePassProgressBar",
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
type Story = StoryObj<typeof BattlePassProgressBar>;

export const Default: Story = {
  args: {
    level: 2,
    step: 30,
    steps: 100,
  },
};
