import type { Meta, StoryObj } from "@storybook/react";
import AchievementCard from "./achievement-card";

const meta: Meta<typeof AchievementCard> = {
  component: AchievementCard,
  title: "Design System/Organisms/AchievementCard",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iAmtSAW1FYSXdm9RPL8uGR/Achievements-%5BBadges%5D---Spec?node-id=2720-55274&m=dev",
    },
  },
  args: {
    name: "Cosmic Threads",
    description: "0.5% of YuLifers",
    points: 10,
    onPress: () => console.log("pressed"),
    icon: {
      uri: "https://yulife-local.imgix.net/storybook/step-achievement.png?ixlib=js-3.2.1&s=f9252a00e07cc0e6b940f9aa0a2ec96a",
      id: "1",
    },
  },
};

export default meta;
type Story = StoryObj<typeof AchievementCard>;

export const Default: Story = {
  args: {},
};

export const Equipped: Story = {
  args: {
    status: "equipped",
  },
};

export const Locked: Story = {
  args: {
    status: "locked",
    icon: {
      uri: "https://yulife-local.imgix.net/storybook/achievement-locked.png?ixlib=js-3.2.1&s=6315ae84e363211f9859f5f41048589f",
      id: "1",
    },
  },
};
