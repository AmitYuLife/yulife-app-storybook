import type { Meta, StoryObj } from "@storybook/react";
import BlurredRaysWrapper from "./blurred-rays-wrapper";
import { Text } from "react-native";

const meta: Meta<typeof BlurredRaysWrapper> = {
  component: BlurredRaysWrapper,
  title: "Design System/organisms/BlurredRaysWrapper",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  args: {
    children: <Text>Some children</Text>,
  },
};

export default meta;
type Story = StoryObj<typeof BlurredRaysWrapper>;

export const Default: Story = {
  args: {
    children: <Text>Hehehe</Text>,
  },
};
