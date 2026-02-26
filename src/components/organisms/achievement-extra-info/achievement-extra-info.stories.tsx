import type { Meta, StoryObj } from "@storybook/react-webpack5";
import AchievementExtraInfo from "./achievement-extra-info";

const meta: Meta<typeof AchievementExtraInfo> = {
  component: AchievementExtraInfo,
  title: "Design System/Organisms/AchievementExtraInfo",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  args: {
    items: [
      {
        title: "Your personal best",
        description: "**0m 0s**",
        icon: {
          uri: "https://yulife-local.imgix.net/app-system/icons/default/trophy-icon-2025-09-23.svg?ixlib=js-3.2.1&w=25&h=25&fit=clip&fm=png&dpr=1&s=e7ef4f2554777280ddf6cc732c9e1a53",
          id: "1",
        },
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof AchievementExtraInfo>;

export const Default: Story = {
  args: {},
};
