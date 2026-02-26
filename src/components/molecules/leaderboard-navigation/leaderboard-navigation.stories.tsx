import type { Meta, StoryObj } from "@storybook/react-webpack5";
import LeaderboardNavigation from "./leaderboard-navigation";

const meta: Meta<typeof LeaderboardNavigation> = {
  component: LeaderboardNavigation,
  title: "Design System/Molecules/LeaderboardNavigation",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/bpwO4qkwPcBErdjtIru9J4/Game-System?node-id=1780%3A36154&mode=dev",
    },
  },
  args: {
    activeSocialGroup: {
      socialGroupId: "test",
      name: "Yulife",
      leaderboards: [],
    },
    description: "test",
    showDuels: true,
  },
};

export default meta;
type Story = StoryObj<typeof LeaderboardNavigation>;

export const Default: Story = {
  args: {},
};
