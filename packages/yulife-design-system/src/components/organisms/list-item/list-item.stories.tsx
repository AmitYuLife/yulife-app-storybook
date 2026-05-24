import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import { ListItem } from ".";

const meta: Meta<typeof ListItem> = {
  title: "Navigation/ListItem",
  component: ListItem,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: {
    name: "Alex Morgan",
    uri: "https://placehold.co/40x40/png",
    type: "leaderboard",
    theme: "default",
    position: 4,
    score: "12,450",
    onPress: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Default: Story = {
  args: {
    name: "Alex Morgan",
    uri: "https://placehold.co/40x40/png",
    type: "leaderboard",
    theme: "default",
    position: 4,
    score: "12,450",
    onPress: fn(),
  },
};

export const Playground: Story = {};
