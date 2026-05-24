import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import { JoinLeaderboard } from ".";

const meta: Meta<typeof JoinLeaderboard> = {
  title: "Layout/JoinLeaderboard",
  component: JoinLeaderboard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: { onPress: fn() },
};

export default meta;
type Story = StoryObj<typeof JoinLeaderboard>;

export const Default: Story = {
  args: { onPress: fn() },
};

export const Playground: Story = {};
