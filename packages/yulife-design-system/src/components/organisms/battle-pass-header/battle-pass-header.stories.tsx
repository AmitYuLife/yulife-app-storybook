import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import { BattlePassHeader } from ".";

const meta: Meta<typeof BattlePassHeader> = {
  title: "Layout/BattlePassHeader",
  component: BattlePassHeader,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: {
    title: "Spring wellness pass",
    description: "Complete daily challenges to level up and unlock rewards.",
    progressStatus: { level: 12, step: 450, steps: 600 },
    onPressWallet: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof BattlePassHeader>;

export const Default: Story = {
  args: {
    title: "Spring wellness pass",
    description: "Complete daily challenges to level up and unlock rewards.",
    progressStatus: { level: 12, step: 450, steps: 600 },
    onPressWallet: fn(),
  },
};

export const Playground: Story = {};
