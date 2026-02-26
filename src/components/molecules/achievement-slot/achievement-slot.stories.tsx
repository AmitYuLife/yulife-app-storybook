import type { Meta, StoryObj } from "@storybook/react-webpack5";
import AchievementSlot from "./achievement-slot";

const meta: Meta<typeof AchievementSlot> = {
  component: AchievementSlot,
  title: "Design System/Molecules/AchievementSlot",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iAmtSAW1FYSXdm9RPL8uGR/Achievements-%5BBadges%5D---Spec?node-id=2709-18193&m=dev&focus-id=2989-40156",
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof AchievementSlot>;

export const Default: Story = {
  args: {
    onPress: () => console.log("Achievement Slot Pressed"),
  },
};

export const WithIcon: Story = {
  args: {
    onPress: () => console.log("Achievement Slot Pressed"),
    icon: {
      uri: "https://yulife-local.imgix.net/storybook/step-achievement.png?ixlib=js-3.2.1&s=f9252a00e07cc0e6b940f9aa0a2ec96a",
      id: "icon-id",
    },
  },
};
