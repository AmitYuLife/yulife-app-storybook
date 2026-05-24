import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { AchievementCard } from ".";

const meta: Meta<typeof AchievementCard> = {
  title: "Layout/AchievementCard",
  component: AchievementCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: {
    name: "Step Master",
    description: "Rare",
    status: "unlocked",
    points: 250,
    icon: { id: "steps", uri: "https://placehold.co/64x64/png" },
  },
};

export default meta;
type Story = StoryObj<typeof AchievementCard>;

export const Default: Story = {
  args: {
    name: "Step Master",
    description: "Rare",
    status: "unlocked",
    points: 250,
    icon: { id: "steps", uri: "https://placehold.co/64x64/png" },
  },
};

export const Playground: Story = {};
