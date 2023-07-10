import type { Meta, StoryObj } from "@storybook/react";
import Pad from "./pad";

const meta: Meta<typeof Pad> = {
  component: Pad,
  title: "Design System/Atoms/Pad",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pad>;

export const Default: Story = {};
