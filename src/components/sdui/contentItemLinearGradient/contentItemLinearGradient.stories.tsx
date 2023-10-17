import type { Meta, StoryObj } from "@storybook/react";
import { ContentItemLinearGradient } from "./contentItemLinearGradient";

type Story = StoryObj<typeof ContentItemLinearGradient>;

const meta: Meta<typeof ContentItemLinearGradient> = {
  component: ContentItemLinearGradient,
  title: "Design System/SDUI/ContentItemLinearGradient",
  tags: ["autodocs"],
  parameters: {},
  args: {
    id: "header-gradient-1",
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
    colors: ["rgba(93,181,129,0)", "rgba(93,181,129,1)", "rgba(93,181,129,1)"],
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
