import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Wrapper from "./wrapper";

const meta: Meta<typeof Wrapper> = {
  component: Wrapper,
  title: "Design System/Atoms/Wrapper",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  args: {
    children: "Some example",
  },
};

export default meta;
type Story = StoryObj<typeof Wrapper>;

export const Default: Story = {
  args: {},
};
