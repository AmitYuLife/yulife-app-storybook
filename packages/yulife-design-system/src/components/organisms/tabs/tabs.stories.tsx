import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import { Tabs } from ".";

const meta: Meta<typeof Tabs> = {
  title: "Navigation/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: {
    list: [
      { name: "Rewards", onPress: fn() },
      { name: "Donations", onPress: fn() },
    ],
    defaultTab: 0,
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    list: [
      { name: "Rewards", onPress: fn() },
      { name: "Donations", onPress: fn() },
    ],
    defaultTab: 0,
  },
};

export const Playground: Story = {};
