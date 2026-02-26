import type { Meta, StoryObj } from "@storybook/react-webpack5";
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

export const WithAchievementPoints: Story = {};

export const WithAchievementEquipped: Story = {
  args: {
    achievement: {
      name: "complete 3 challenges",
      id: "67e2a95091dd910d3631f02b",
      type: "progress",
      points: 10,
      description: "description",
      backgroundColor: "#000000",
      textColor: "#000000",
      topBarType: "default",
      backgroundImage: {
        uri: "https://yulife-local.imgix.net/achievements/backgrounds/yudoku-workout-background-1.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=dc1b8aa38dee4a63456ae3078610332d",
        id: "background-image",
      },
      icon: {
        uri: "https://yulife-local.imgix.net/storybook/step-achievement.png?ixlib=js-3.2.1&s=f9252a00e07cc0e6b940f9aa0a2ec96a",
        id: "icon-key",
      },
    },
  },
};
