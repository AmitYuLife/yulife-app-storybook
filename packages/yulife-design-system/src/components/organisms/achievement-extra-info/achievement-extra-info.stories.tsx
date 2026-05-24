import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { AchievementExtraInfo } from ".";

const meta: Meta<typeof AchievementExtraInfo> = {
  title: "Feedback/AchievementExtraInfo",
  component: AchievementExtraInfo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: { items: [{ title: "First unlocked", description: "12 Jan 2026", icon: { id: "calendar" } }] },
};

export default meta;
type Story = StoryObj<typeof AchievementExtraInfo>;

export const Default: Story = {
  args: { items: [{ title: "First unlocked", description: "12 Jan 2026", icon: { id: "calendar" } }] },
};

export const Playground: Story = {};
