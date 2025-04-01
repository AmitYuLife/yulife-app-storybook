import type { Meta, StoryObj } from "@storybook/react";
import AchievementPoints from "./achievement-points";

const meta: Meta<typeof AchievementPoints> = {
  component: AchievementPoints,
  title: "Design System/Molecules/AchievementPoints",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iAmtSAW1FYSXdm9RPL8uGR/Achievements-%5BBadges%5D---Spec?node-id=2992-55108&m=dev",
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof AchievementPoints>;

export const Default: Story = {
  args: {
    points: 10000,
    autoWidth: false,
  },
};

export const AutoWidth: Story = {
  args: {
    points: 100,
    autoWidth: true,
  },
};
