import type { Meta, StoryObj } from "@storybook/react-webpack5";
import AvPlayerLoading from "./av-player-loading";
import { View } from "react-native";

const meta: Meta<typeof AvPlayerLoading> = {
  component: AvPlayerLoading,
  title: "Design System/Organisms/AvPlayerLoading",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  decorators: [
    (Story) => (
      <View style={{ height: 300 }}>
        <Story />
      </View>
    ),
  ],
  args: {},
};

export default meta;
type Story = StoryObj<typeof AvPlayerLoading>;

export const Default: Story = {
  args: {},
};
