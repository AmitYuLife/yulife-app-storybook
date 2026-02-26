import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Component from "./pathways-reflect-chest";
import { noop } from "@utils";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Modules/Pathways/PathwaysReflectChest",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  args: {
    onPress: noop,
    yucoinAmount: 50,
    status: "active",
  },
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Active: Story = {
  args: {
    status: "active",
  },
};

export const Completed: Story = {
  args: {
    status: "completed",
  },
};

export const Locked: Story = {
  args: {
    status: "locked",
  },
};
