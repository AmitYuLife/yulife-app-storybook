import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Block from "./block";
import { Text } from "react-native";

const meta: Meta<typeof Block> = {
  component: Block,
  title: "Design System/Atoms/Block",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  args: {
    children: <Text>Some example</Text>,
  },
};

export default meta;
type Story = StoryObj<typeof Block>;

export const Default: Story = {};
