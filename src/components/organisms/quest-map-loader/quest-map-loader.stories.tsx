import type { Meta, StoryObj } from "@storybook/react";
import QuestMapLoader from "./quest-map-loader";

const meta: Meta<typeof QuestMapLoader> = {
  component: QuestMapLoader,
  title: "Design System/Molecules/QuestMapLoader",
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
type Story = StoryObj<typeof QuestMapLoader>;

export const Default: Story = {
  args: {
    isLoading: true,
  },
};
