import type { Meta, StoryObj } from "@storybook/react-webpack5";
import StarInline from "./star-inline";

const meta: Meta<typeof StarInline> = {
  component: StarInline,
  title: "Design System/Atoms/StarInline",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  args: {
    style: {
      width: 13,
      height: 12,
    },
  },
};

export default meta;
type Story = StoryObj<typeof StarInline>;

export const Filled: Story = {
  args: {
    filled: true,
  },
};

export const Empty: Story = {};
