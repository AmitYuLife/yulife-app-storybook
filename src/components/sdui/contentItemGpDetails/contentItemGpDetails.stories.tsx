
import type { Meta, StoryObj } from "@storybook/react";
import { ContentItemGpDetails } from "./contentItemGpDetails";

type Story = StoryObj<typeof ContentItemGpDetails>;

const meta: Meta<typeof ContentItemGpDetails> = {
  component: ContentItemGpDetails,
  title: "Design System/SDUI/ContentItemGpDetails",
  tags: ["autodocs"],
  parameters: {},
  args: {},
};

export default meta;

export const Default: Story = {
  args: {},
};
