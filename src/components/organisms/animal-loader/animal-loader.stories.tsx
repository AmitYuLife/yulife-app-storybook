import type { Meta, StoryObj } from "@storybook/react";
import AnimalLoader from "./animal-loader";

const meta: Meta<typeof AnimalLoader> = {
  component: AnimalLoader,
  title: "Design System/Molecules/AnimalLoader",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  args: {
    isLoading: true,
  },
};

export default meta;
type Story = StoryObj<typeof AnimalLoader>;

export const Default: Story = {
  args: {
    isLoading: true,
  },
};
