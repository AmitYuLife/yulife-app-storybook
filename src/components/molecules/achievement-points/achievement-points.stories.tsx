import type { Meta, StoryObj } from "@storybook/react";
import AchievementPoints from "./achievement-points";
import { addCommasToNumber } from "@utils";

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
    label: "0",
  },
};

export const WithoutAutoWidth: Story = {
  args: {
    label: addCommasToNumber(1000),
  },
};

export const AutoWidth: Story = {
  args: {
    label: addCommasToNumber(1000),
    autoWidth: true,
  },
};

export const LabelAsText: Story = {
  args: {
    label: "35 Achievement Points",
    autoWidth: true,
  },
};
