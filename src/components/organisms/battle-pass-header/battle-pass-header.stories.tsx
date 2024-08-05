import type { Meta, StoryObj } from "@storybook/react";
import BattlePassHeader from "./battle-pass-header";

const meta: Meta<typeof BattlePassHeader> = {
  component: BattlePassHeader,
  title: "Design System/Organisms/BattlePassHeader",
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
type Story = StoryObj<typeof BattlePassHeader>;

export const Default: Story = {
  args: {},
};
