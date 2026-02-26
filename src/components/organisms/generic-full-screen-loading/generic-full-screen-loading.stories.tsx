import type { Meta, StoryObj } from "@storybook/react-webpack5";
import GenericFullScreenLoading from "./generic-full-screen-loading";
import { View } from "react-native";

const meta: Meta<typeof GenericFullScreenLoading> = {
  component: GenericFullScreenLoading,
  title: "Design System/Organisms/GenericFullScreenLoading",
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
type Story = StoryObj<typeof GenericFullScreenLoading>;

export const Default: Story = {
  args: {
    heading: "Heading",
    onLeftIconPress: () => console.log("left icon"),
  },
};

export const LeftIcon: Story = {
  args: {
    onLeftIconPress: () => console.log("left icon"),
  },
};

export const RightIcon: Story = {
  args: {
    onRightIconPress: () => console.log("right icon"),
  },
};
