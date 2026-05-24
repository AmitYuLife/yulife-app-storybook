import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { BattlePassProgressBar } from ".";

const meta: Meta<typeof BattlePassProgressBar> = {
  title: "Feedback/BattlePassProgressBar",
  component: BattlePassProgressBar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: {
    level: 12,
    step: 450,
    steps: 600,
    status: "450 / 600 XP",
  },
};

export default meta;
type Story = StoryObj<typeof BattlePassProgressBar>;

export const Default: Story = {
  args: {
    level: 12,
    step: 450,
    steps: 600,
    status: "450 / 600 XP",
  },
};

export const Playground: Story = {};
