import type { Meta, StoryObj } from "@storybook/react";
import AchievementsShowcase from "./achievements-showcase";

const meta: Meta<typeof AchievementsShowcase> = {
  component: AchievementsShowcase,
  title: "Design System/Organisms/AchievementsShowcase",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iAmtSAW1FYSXdm9RPL8uGR/Achievements-%5BBadges%5D---Spec?node-id=2720-53222&t=DKa4E2pItP4Pp0Nt-4",
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof AchievementsShowcase>;

export const Default: Story = {
  args: {},
};

export const WithAchievementPoints: Story = {
  args: {
    points: 300,
  },
};

export const WithAchievementEquipped: Story = {
  args: {
    points: 10,
    achievements: [
      {
        name: "complete 3 challenges",
        id: "67e2a95091dd910d3631f02b",
        type: "progress",
        points: 10,
        description: "description",
        icon: {
          uri: "https://yulife-local.imgix.net/storybook/step-achievement.png?ixlib=js-3.2.1&s=f9252a00e07cc0e6b940f9aa0a2ec96a",
          id: "icon-key",
        },
      },
    ],
  },
};
