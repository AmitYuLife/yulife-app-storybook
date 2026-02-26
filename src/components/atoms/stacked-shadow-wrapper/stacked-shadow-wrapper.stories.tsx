import type { Meta, StoryObj } from "@storybook/react-webpack5";
import StackedShadowWrapper from "./stacked-shadow-wrapper";
import { Text, View } from "react-native";

const meta: Meta<typeof StackedShadowWrapper> = {
  component: StackedShadowWrapper,
  title: "Design System/Atoms/StackedShadowWrapper",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof StackedShadowWrapper>;

export const Default: Story = {
  args: {
    children: (
      <View style={{ width: "100%", height: 160, padding: 10, backgroundColor: "#FFFFFF" }}>
        <Text>Stack Wrapper</Text>
      </View>
    ),
  },
};
