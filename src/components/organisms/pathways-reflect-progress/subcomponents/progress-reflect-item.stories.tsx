import type { Meta, StoryObj } from "@storybook/react";
import ProgressReflectItem from "./progress-reflect-item";

const meta: Meta<typeof ProgressReflectItem> = {
  component: ProgressReflectItem,
  title: "Design System/Organisms/PathwaysReflectProgress/ProgressReflectItem",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/bEJ8yKPTj2aWVhNxvoZC3e/Pathways---Spec?node-id=4255-9602&m=dev",
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof ProgressReflectItem>;

export const Default: Story = {
  args: {
    label: "Day 1",
    icon: require("@assets/icons/coin.webp"),
    isToday: false,
    isDone: false,
  },
};
