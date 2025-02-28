import type { Meta, StoryObj } from "@storybook/react";
import GenericHeading from "./generic-heading";
import { View } from "react-native";

const meta: Meta<typeof GenericHeading> = {
  component: GenericHeading,
  title: "Design System/Organisms/GenericHeading",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  decorators: [
    (Story) => (
      <View style={{ height: 300, width: 350 }}>
        <Story />
      </View>
    ),
  ],
  args: {},
};

export default meta;
type Story = StoryObj<typeof GenericHeading>;

const onLeftIconPress = () => console.log("left icon");
const onRightIconPress = () => console.log("right icon");

export const Default: Story = {
  args: {
    logo: "yulife",
    heading: "",
    onLeftIconPress,
    onRightIconPress,
  },
};

export const LongHeadingMock: Story = {
  args: {
    heading: "VeryLongHeadingTe...",
    onLeftIconPress,
    onRightIconPress,
  },
};
