import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import { BattlePassListItem } from ".";

const meta: Meta<typeof BattlePassListItem> = {
  title: "Layout/BattlePassListItem",
  component: BattlePassListItem,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: {
    position: 3,
    title: "Day 3 reward",
    icon: { uri: "https://placehold.co/48x48/png", width: 48, height: 48 },
    backgroundColour: "#5B2EFF",
    status: "pending",
    onPress: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof BattlePassListItem>;

export const Default: Story = {
  args: {
    position: 3,
    title: "Day 3 reward",
    icon: { uri: "https://placehold.co/48x48/png", width: 48, height: 48 },
    backgroundColour: "#5B2EFF",
    status: "pending",
    onPress: fn(),
  },
};

export const Playground: Story = {};
