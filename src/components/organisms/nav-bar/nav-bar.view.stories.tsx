import type { Meta, StoryObj } from "@storybook/react";
import NavBarView from "./nav-bar.view";
import { View } from "react-native";

const meta: Meta<typeof NavBarView> = {
  component: NavBarView,
  title: "Design System/Organisms/NavBarView",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/aNnODOQlMlk38LrQVs63oq/App-%2F-Core-UI?type=design&node-id=9509-3583&mode=design&t=8OfzIWoCrMjw4kdm-4",
    },
  },
  args: {
    activeIndex: 0,
    hasQuestNotification: false,
    labels: undefined,
  },
  decorators: [
    (Story) => (
      <View style={{ height: 100 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof NavBarView>;

export const Default: Story = {
  args: {},
};

export const WithNotifications: Story = {
  args: {
    hasQuestNotification: true,
  },
};
