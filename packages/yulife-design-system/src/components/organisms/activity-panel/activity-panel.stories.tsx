import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ActivityPanel } from ".";

const meta: Meta<typeof ActivityPanel> = {
  title: "Layout/ActivityPanel",
  component: ActivityPanel,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: { title: "Daily steps", milestone: "10,000 steps", rewardText: "+15 YuCoin", icon: { id: "steps" } },
};

export default meta;
type Story = StoryObj<typeof ActivityPanel>;

export const Default: Story = {
  args: { title: "Daily steps", milestone: "10,000 steps", rewardText: "+15 YuCoin", icon: { id: "steps" } },
};

export const Playground: Story = {};
