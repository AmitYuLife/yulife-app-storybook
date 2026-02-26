import type { Meta, StoryObj } from "@storybook/react-webpack5";
import BlurredWrapper from "./blurred-wrapper";
import { Text } from "react-native";

const meta: Meta<typeof BlurredWrapper> = {
  component: BlurredWrapper,
  title: "Design System/Atoms/BlurredWrapper",
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
type Story = StoryObj<typeof BlurredWrapper>;

export const Default: Story = {
  args: {
    children: <Text>Hehehe</Text>,
  },
};
