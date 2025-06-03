import type { Meta, StoryObj } from "@storybook/react";
import ViewAchievementModal from "./view-achievement-modal";
import { View } from "react-native";

const meta: Meta<typeof ViewAchievementModal> = {
  component: ViewAchievementModal,
  title: "Design System/Modals/ViewAchievementModal",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <View style={{ height: 600 }}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/iAmtSAW1FYSXdm9RPL8uGR/Achievements-%5BBadges%5D---Spec?node-id=2912-56778&m=dev",
    },
  },
  args: {
    name: "Cosmic Threads",
    description: "[You’ve earned this achievement by completing all challenges on Ring Planet!]",
    shortDescription: "0.5% of YuLifers have this",
    points: 10,
    icon: {
      id: "1",
      uri: "https://yulife-local.imgix.net/storybook/badge.png?ixlib=js-3.2.1&s=48477b381773671af55d10aac9a40109",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ViewAchievementModal>;

export const Default: Story = {
  args: {},
};

export const UnEquipped: Story = {
  args: {
    status: "equipped",
  },
};
