import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ActivityHistoryDay } from ".";

const meta: Meta<typeof ActivityHistoryDay> = {
  title: "Layout/ActivityHistoryDay",
  component: ActivityHistoryDay,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: {
    title: "Monday 19 May",
    level: "Level 434",
    yucoin: "120",
    leftIcon: { id: "steps" },
    historyItems: [
      { title: "Morning walk", activityItems: [{ title: "Steps", yucoin: "80", stars: 3, leftIcon: { id: "walk" } }] },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof ActivityHistoryDay>;

export const Default: Story = {
  args: {
    title: "Monday 19 May",
    level: "Level 434",
    yucoin: "120",
    leftIcon: { id: "steps" },
    historyItems: [
      { title: "Morning walk", activityItems: [{ title: "Steps", yucoin: "80", stars: 3, leftIcon: { id: "walk" } }] },
    ],
  },
};

export const Playground: Story = {};
