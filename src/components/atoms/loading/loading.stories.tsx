import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Loading from "./loading";

const meta: Meta<typeof Loading> = {
  component: Loading,
  title: "Design System/Atoms/Loading",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Large: Story = {
  args: {
    size: "large",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};
